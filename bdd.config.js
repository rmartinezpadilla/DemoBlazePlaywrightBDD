export default {
    paths: ['tests/features/*.feature'],
    require: ['tests/steps/*.js'],
    generateTitle: false, // Evita que use test.describe()
    use: {
        trace: 'on-first-retry',
        headless: false, // <-- Agrega esto
    },
      autoDescribe: false,  // 🔴 Evita `test.describe()`
      generateDescribeBlock: false, // 🔴 Evita bloques `describe()`
      generateTitle: false   // Opcional: Mantiene los títulos de los tests
};