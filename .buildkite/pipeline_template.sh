#!/bin/bash

cat <<EOF
steps:
  - command: bin/ci_rspec
    label: ":rspec: Run tests"
    agents:
        queue: buildkite-elastic
EOF
