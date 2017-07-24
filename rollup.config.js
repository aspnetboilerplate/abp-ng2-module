export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/abp-ng2-module.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.abpModule',
  globals: {
    '@angular/core': 'ng.core'
  }
}