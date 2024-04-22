@todo: reorganize and document test files.

`projectsDummy.json` - source of truth for comparing the results of `transformProjects()` against .

To run tests (will also watch) using vitest, use command `npm run vitest`

Errors bubble up to transform operation functions. 

---

### Why not use mocks for file I/O operations?
This is a strategic decision tailored to the specific needs and scale of the project. Transform operations are run infrequently, manually, on one specific machine, and on a small (predictable) dataset; the goal is to test outputs in the most straightforward way possible. Since the primary functionality of `transform.js` is to write JSON files that the React app consumes, the goal here is to ensure that file-writing works under real conditions:
- Is the file correctly formatted
- Does it contain the necessary data
- Does it gracefully handle individual transformation failures

It's made more sense at present to avoid using mocks to simulate file writing operations in order to avoid introducing unncessary overhead and complexity. There is a need for absolute certainty in the production functionality of the script, since its purpose is so closely tied to actual file output; direct testing of this output offers the most reliable assurance of functionality. 
