#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkpipelinesDemoPipelineStack } from "../lib/cdkpipelines-demo-pipeline-stack";

const app = new App();

new CdkpipelinesDemoPipelineStack(app, "CdkpipelinesDemoPipelineStack", {
  env: { account: "724397176020", region: "us-east-1" },
});

app.synth();
