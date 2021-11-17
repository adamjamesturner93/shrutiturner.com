module.exports = {
    '**/*.ts?(x)': (filenames) => `yarn lint . ${filenames.join(' ')}`,
    '{pages,styles}/**/*.scss': (filenames) => `stylelint ${filenames.join(' ')}`
}
