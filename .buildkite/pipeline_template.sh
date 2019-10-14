#!/bin/bash

cat <<EOF
steps:
  - command: bin/ci_rspec
    label: ":rspec: Run tests"
EOF
