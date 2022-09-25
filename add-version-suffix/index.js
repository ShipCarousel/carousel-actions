const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
const utils = require('@shipcarousel/carousel-actions-lib');

async function run()
{
    let versionSuffix = core.getInput("versionSuffix");
    if(versionSuffix)
    {
        await exec.exec(`carousel-build ChangeVersion -CustomVersionSuffix \"${versionSuffix}\"`).then(exitCode => {
            if(exitCode != 0)
            {
                core.setFailed("carousel-build ChangeVersion failed");
            }
        });
    }

}

run().catch(err => {
    core.setFailed(err.message);
});
