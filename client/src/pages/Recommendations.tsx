/* Swiss Design - Recommendations Page
 * Concrete tool recommendations for each evaluation tier
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Recommendations() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-success/10 to-background border-b border-success/20">
        <div className="container px-6 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 mono">Tool Recommendations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Concrete recommendations for building a comprehensive MCP tool evaluation system, based on research across 8 key categories and analysis of both open-source and proprietary solutions.
          </p>
        </div>
      </section>

      {/* Tier 1 Recommendations */}
      <section className="container px-6 lg:px-12 py-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="badge-tier1">TIER 1</span>
          <h2 className="text-3xl font-bold mono">Integration Testing Recommendations</h2>
        </div>

        <div className="space-y-6">
          {/* Schema Validation */}
          <Card className="border-tier1/30">
            <CardHeader>
              <CardTitle className="mono">Schema Validation</CardTitle>
              <CardDescription>Define and enforce API contracts using standardized formats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-success/10 border border-success/30 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mono mb-2">Recommended: OpenAPI Specification + Dredd</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Define all MCP tool contracts using the OpenAPI Specification, then use Dredd for automated contract testing in your CI/CD pipeline. This combination provides standardized, machine-readable contracts that can be consumed by many validation tools.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="badge-opensource">Open Source</span>
                        <ArrowRight size={12} />
                        <span>Low to Medium Integration Complexity</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 border border-border rounded">
                  <h5 className="font-semibold mono text-sm mb-2">Alternative: Language-Specific Validators</h5>
                  <p className="text-sm text-muted-foreground">
                    For JavaScript/TypeScript projects, consider <strong className="text-foreground mono">AJV</strong> for JSON Schema validation. For Java environments, use <strong className="text-foreground mono">networknt/json-schema-validator</strong>. These offer deep integration with existing codebases.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Golden Snapshots */}
          <Card className="border-tier1/30">
            <CardHeader>
              <CardTitle className="mono">Golden Snapshots</CardTitle>
              <CardDescription>Catch unintended changes in tool outputs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-success/10 border border-success/30 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mono mb-2">Recommended: Jest (JavaScript) or Insta (Rust)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Integrate snapshot testing directly into your unit test suite for each MCP tool. Jest provides excellent snapshot support for JavaScript/TypeScript projects, while Insta offers similar capabilities for Rust-based implementations.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="badge-opensource">Open Source</span>
                        <ArrowRight size={12} />
                        <span>Low Integration Complexity</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Runtime Correctness */}
          <Card className="border-tier1/30">
            <CardHeader>
              <CardTitle className="mono">Runtime Correctness</CardTitle>
              <CardDescription>Verify output accuracy and successful mutations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-success/10 border border-success/30 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mono mb-2">Recommended: Rest-Assured or Karate DSL + Meta API Sandbox</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Use <strong className="text-foreground mono">Rest-Assured</strong> for code-driven functional tests in Java environments, or <strong className="text-foreground mono">Karate DSL</strong> for BDD-style testing with less Java knowledge required. Always run tests against the <strong className="text-foreground mono">Meta Marketing API Sandbox</strong> to ensure realistic validation without affecting production.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="badge-opensource">Open Source</span>
                        <ArrowRight size={12} />
                        <span>Low to Medium Integration Complexity</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 border border-border rounded">
                  <h5 className="font-semibold mono text-sm mb-2">For Broader Team Adoption</h5>
                  <p className="text-sm text-muted-foreground">
                    Consider <strong className="text-foreground mono">Postman</strong> for its intuitive interface and comprehensive API lifecycle management. It's accessible to team members without deep coding expertise and provides built-in monitoring capabilities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error Mapping */}
          <Card className="border-tier1/30">
            <CardHeader>
              <CardTitle className="mono">Error Mapping</CardTitle>
              <CardDescription>Validate error translation from Ads API to MCP tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-success/10 border border-success/30 rounded">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mono mb-2">Recommended: Mockoon or Microcks.io</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use mocking tools to simulate various Ads API error conditions. Write custom tests that verify MCP tools correctly map these errors to appropriate error codes and messages. Both tools offer flexible error simulation capabilities.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="badge-opensource">Open Source</span>
                      <ArrowRight size={12} />
                      <span>Medium Integration Complexity</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tier 2 Recommendations */}
      <section className="container px-6 lg:px-12 py-16 bg-card/30">
        <div className="flex items-center gap-3 mb-8">
          <span className="badge-tier2">TIER 2</span>
          <h2 className="text-3xl font-bold mono">E2E Evaluation Recommendations</h2>
        </div>

        <div className="space-y-6">
          {/* Trajectory Evaluation */}
          <Card className="border-tier2/30">
            <CardHeader>
              <CardTitle className="mono">Trajectory Evaluation</CardTitle>
              <CardDescription>Assess agent tool orchestration and decision paths</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-success/10 border border-success/30 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mono mb-2">Recommended: Langfuse or Phoenix (Open Source)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Start with <strong className="text-foreground mono">Langfuse</strong> for its agent graph visualization and experimentation features, or <strong className="text-foreground mono">Phoenix</strong> for comprehensive LLM tracing built on OpenTelemetry. Both provide the observability needed to understand complex agent trajectories.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="badge-opensource">Open Source</span>
                        <ArrowRight size={12} />
                        <span>Low to Medium Integration Complexity</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 border border-border rounded">
                  <h5 className="font-semibold mono text-sm mb-2">For LangChain Ecosystems</h5>
                  <p className="text-sm text-muted-foreground">
                    If heavily invested in LangChain, consider <strong className="text-foreground mono">LangSmith</strong> for its specialized trajectory matching capabilities and tight integration with the LangChain framework.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Response Evaluation */}
          <Card className="border-tier2/30">
            <CardHeader>
              <CardTitle className="mono">Response Evaluation</CardTitle>
              <CardDescription>LLM grading for response quality assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-success/10 border border-success/30 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mono mb-2">Recommended: DeepEval + Ragas (Open Source)</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Use <strong className="text-foreground mono">DeepEval</strong> for its wide variety of ready-to-use evaluation metrics and Pytest-like integration. Combine with <strong className="text-foreground mono">Ragas</strong> for RAG-specific evaluation when responses are grounded in tool outputs. Both offer flexibility for custom metrics.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="badge-opensource">Open Source</span>
                        <ArrowRight size={12} />
                        <span>Medium Integration Complexity</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-secondary/20 border border-border rounded">
                  <h5 className="font-semibold mono text-sm mb-2">For Production Scale</h5>
                  <p className="text-sm text-muted-foreground">
                    As you move to production, integrate <strong className="text-foreground mono">LangSmith</strong> or <strong className="text-foreground mono">Arize AI</strong> for advanced features like end-to-end observability, experiment management, and enterprise support.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* MCP-Specific */}
          <Card className="border-tier2/30">
            <CardHeader>
              <CardTitle className="mono">MCP-Specific Evaluation</CardTitle>
              <CardDescription>Tools designed specifically for MCP servers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-primary/10 border border-primary/30 rounded">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mono mb-2">Essential: MCP Inspector + DeepEval for MCP</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Always use <strong className="text-foreground mono">MCP Inspector</strong> for interactive debugging during development. Build automated E2E evaluation pipelines with <strong className="text-foreground mono">DeepEval for MCP</strong>, which provides specific metrics like MCPUseMetric and MCPTaskCompletionMetric.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="badge-opensource">Open Source</span>
                      <ArrowRight size={12} />
                      <span>Low to Medium Integration Complexity</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Roadmap */}
      <section className="container px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-bold mb-8 mono">Implementation Roadmap</h2>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mono">1</span>
                <CardTitle className="mono">Phase 1: Tier 1 Foundation (Weeks 1-4)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pl-11">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Define OpenAPI specifications for all MCP tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Set up Dredd for automated schema validation in CI/CD</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Implement snapshot testing with Jest or Insta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Configure Meta API Sandbox access for testing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mono">2</span>
                <CardTitle className="mono">Phase 2: Runtime Validation (Weeks 5-8)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pl-11">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Write functional tests with Rest-Assured or Karate DSL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Implement outcome correctness tests for write operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Set up error mocking with Mockoon or Microcks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Validate error mapping from Ads API to MCP tools</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mono">3</span>
                <CardTitle className="mono">Phase 3: Tier 2 Trajectory (Weeks 9-12)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pl-11">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Integrate Langfuse or Phoenix for trajectory tracing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Set up MCP Inspector for interactive debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Create reference trajectories for common tasks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Implement deterministic trajectory validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mono">4</span>
                <CardTitle className="mono">Phase 4: Response Quality (Weeks 13-16)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pl-11">
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Set up DeepEval with custom evaluation metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Implement LLM-as-a-judge for qualitative assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Configure DeepEval for MCP with MCPUseMetric and MCPTaskCompletionMetric</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>Schedule daily E2E evaluation runs</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="container px-6 lg:px-12 py-16 bg-card/30">
        <h2 className="text-3xl font-bold mb-8 mono">Key Takeaways</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-success/30">
            <CardHeader>
              <CardTitle className="mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Start Simple
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Begin with open-source tools for Tier 1 testing. These provide immediate value with minimal investment and can be integrated quickly into existing workflows.
            </CardContent>
          </Card>

          <Card className="border-success/30">
            <CardHeader>
              <CardTitle className="mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Scale Gradually
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Add Tier 2 evaluation as your MCP tools mature. Consider proprietary platforms when you need advanced features, collaboration, or enterprise support.
            </CardContent>
          </Card>

          <Card className="border-success/30">
            <CardHeader>
              <CardTitle className="mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Prioritize MCP-Specific Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Always use MCP Inspector and DeepEval for MCP. These tools understand the MCP ecosystem and provide capabilities not available in general-purpose solutions.
            </CardContent>
          </Card>

          <Card className="border-success/30">
            <CardHeader>
              <CardTitle className="mono flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-success" />
                Automate Early
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Integrate Tier 1 tests into CI/CD from day one. Fast feedback loops prevent regressions and maintain quality as your MCP server evolves.
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
