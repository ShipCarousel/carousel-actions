const core = require('@actions/core');
const exec = require('@actions/exec');
const fs = require('fs');

async function run()
{

    if (!process.env.SONAR_TOKEN) {
        core.error(`Required SONAR_TOKEN parameter is empty. Step skipped.`);
        return;
    }

    const emptyCoverageContent = '<coverage version="1"></coverage>';
    const coveragePath = './.tmp/coverage.xml'
    if(!fs.existsSync(coveragePath)){
        fs.mkdirSync("./.tmp");
        fs.writeFileSync(coveragePath, emptyCoverageContent);
    }
    delete process.env.JAVA_TOOL_OPTIONS;
    try {
        await exec.exec(`carousel-build SonarQubeEnd -SonarAuthToken ${process.env.SONAR_TOKEN} -skip`).then(exitCode => {
            if(exitCode != 0)
            {
                core.setFailed("carousel-build SonarQubeEnd failed");
            }
        });
    } catch (error) {
        core.info(error.message);
        core.setFailed('\x1b[41mError while carousel-build SonarQubeEnd executed detected:\x1b[0m');
    }

}

run().catch(err => core.setFailed(err.message));