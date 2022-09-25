# sonar-scanner-end

Runs carousel-build SonarQubeEnd

## Example of usage

```
- name: SonarCloud End
  uses: shipcarousel/carousel-github-actions/sonar-scanner-end@main
```

## Compile action

Use @vercel/ncc tool to compile your code and modules into one file used for distribution.

-Install vercel/ncc by running this command in your terminal.

```bash
npm i -g @vercel/ncc
```

-Compile your index.ts file.

```bash
ncc build ./index.js --license licenses.txt
```

