const {
    promptUser,
    generateREADME,
    writeFileAsync
} = require("./Untitled-1");
// Lines 999 and 1002 are ternary operators affecting whether or not to have a screenshot and license section upon README generation
// Lines 1010 and 1016 are ternary operators functioning similarly to lines 999 and 1002
// function to initialize program
async function init() {
    try {
        const answers = await promptUser();

        const README = generateREADME(answers);
        // Rather than writing to the root of the file and overwriting this projects README, user's documents are written to their own folder
        await writeFileAsync("./READMElocation/README.md", README);

        console.log("You've successfully wrote a new README.md!");
    } catch (err) {
        console.log(err);
    }
}
// function call to initialize program
init();