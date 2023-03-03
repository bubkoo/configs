#!/bin/sh

if [ "$CI" = "true" ] || [ "$NODE_ENV" = "production" ]; then
    echo "CI or production environment, skipping husky hook."
    exit 0
fi
