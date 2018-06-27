#!/usr/bin/env node
import { OrbitalFactory } from '@orbital/core';
import { MyCLI } from './cli';



OrbitalFactory
    .bootstrap(MyCLI)
    .execute(process.argv)