const {exec} = require('child_process')
const {argv} = process
if (argv.length == 4) {
    const port = argv[3]
    const tag = argv[2]
    exec(`docker build -t ${tag} .`, (err, stdout) => {
        if (err == null) {
            console.log(stdout)
            exec(`docker run -p ${port}:8080 ${tag}`, (err, stdout) => {
                if (err == null) {
                    console.log(stdout)
                } else {
                    console.log(err)
                }
            })
        }
    })
}
