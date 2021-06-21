const esbuild = require('esbuild')
const sveltePlugin = require('esbuild-svelte')

for (let f of ["content", "background", "help", "newtab", "commandline_frame"]) {
        esbuild.build({
        entryPoints: [`src/${f}.ts`],
        bundle: true,
        sourcemap: true,
        target: "firefox68",
        outfile: `buildtemp/${f}.js`,
        plugins: [sveltePlugin()],
    }).catch(() => process.exit(1))
}
