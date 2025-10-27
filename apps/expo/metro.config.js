// Learn more https://docs.expo.dev/guides/monorepos
// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const projectRoot = __dirname
const workspaceRoot = path.resolve(projectRoot, '../..')

const config = getDefaultConfig(projectRoot)

config.watchFolders = [workspaceRoot]
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
]
config.resolver.disableHierarchicalLookup = true

// Block web-only packages that shouldn't be bundled in React Native
config.resolver.blockList = [
  /@radix-ui\/.*/,
]

config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Block @radix-ui imports for native platforms
  if (moduleName.startsWith('@radix-ui/')) {
    return {
      type: 'empty',
    }
  }
  // Use default resolver
  return context.resolveRequest(context, moduleName, platform)
}

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
})

module.exports = config
