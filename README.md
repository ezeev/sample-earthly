# BE Coding Exercise - Earthly

[Earthly](https://earthly.dev/) is a great tool for improving developer experience across teams. We currently use it in our devops pipeline to enable CI/CD testing in any environment. This means we (usually) get the same results on any machine- local or hosted. Its pretty straightforward to learn and use, and it can be be very powerful and flexible. By completing this exercise you will gain a working knowledge of a new open-source DevOps tool.

Estimated time: 1-2 hours

Skills required:

- Continuous integration, testing, and DevOps
- Docker
- Learning a new language (don’t worry- its just a combination of languages you already know)
- There are 3 incremental phases. Please make a separate branch or commit for each phase, so we can review and run each separately.

## Phase 1 - Tests

- [ ] Clone (Do not fork) this repo to a private repo. Your work is precious, don’t let others cheat.
- [ ] Set up Earthly to run `yarn test`
- [ ] Create a Github action `ci-earthly.yml` that runs the earthly command above for all Pull Requests
- [ ] Make a new Pull Request against `main` to demonstrate that Earthly is run successfully in Github Actions.

## Phase 2 - Container Creation

For simplicity, assume all docker images will be immediately pushed to production, and seen by millions of users. In other words, there are no staging environments.

- [ ] Ensure the existing Dockerfile can be built & run

```bash
docker build . -t my-earthly-example --build-arg ENVIRONMENT=production

docker run -it --rm \
 -p 3000:3000 \
 --env-file .env \
 my-earthly-example:latest
```

- [ ] Now update the Earthfile to build the image, instead of using the Dockerfile.
      Update the Earthfile to push the new image to the - [ ] Github Container Registry (Note: do not use the docker-hub registry). See https://docs.earthly.dev/docs/earthfile#save-image
- [ ] Test it by pushing the image to GHCR using the Earthly CLI. Don’t forget you must first authenticate with the registry
      Update the Earthfile to prevent pushing images unless all tests pass. You will need to modify the tests to pass
- [ ] Determine when ci-earthly.yml should push production images to the registry, and update it accordingly.
- [ ] Bonus- Add Semantic Versioning

## Phase 3 - Discussion

Assume something similar to what you just built is used in production.

1. What are some security vulnerabilities?
2. What are some potential issues with this system, in relation to Devops and quality control?
3. Are there other ways you see Earthly being used in a DevOps pipeline? In what ways should it not be used?
4. (Retrospective) How difficult was this exercise in effort & time? What parts of it did you enjoy? What parts did you not enjoy or need improvement?

You can add your answers for these to the readme here:

### Discussion Answers

...
