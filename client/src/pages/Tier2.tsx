/* Swiss Design - Tier 2 E2E Evaluation Page
 * Agent orchestration and response quality assessment
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

export default function Tier2() {
  const trajectoryTools = {
    openSource: [
      { name: "Phoenix (Arize)", desc: "Open-source LLM tracing and evaluation platform", url: "https://phoenix.arize.com/" },
      { name: "Langfuse", desc: "LLM observability with agent graph visualization", url: "https://langfuse.com/" },
    ],
    proprietary: [
      { name: "LangSmith", desc: "Specialized agent trajectory evaluators from LangChain", url: "https://www.langchain.com/langsmith" },
    ],
  };

  const responseTools = {
    openSource: [
      { name: "DeepEval", desc: "Wide variety of LLM evaluation metrics", url: "https://github.com/confident-ai/deepeval" },
      { name: "Ragas", desc: "RAG pipeline evaluation framework", url: "https://docs.ragas.io/" },
      { name: "PromptFoo", desc: "LLM application evaluation and red-teaming", url: "https://www.promptfoo.dev/" },
    ],
    proprietary: [
      { name: "Arize AI", desc: "LLM observability and agent evaluation platform", url: "https://arize.com/" },
      { name: "LangSmith", desc: "LLM-as-a-judge and response quality evaluation", url: "https://www.langchain.com/langsmith" },
    ],
  };

  const mcpTools = [
    { name: "MCP Inspector", desc: "Interactive developer tool for testing and debugging MCP servers", url: "https://modelcontextprotocol.io/docs/tools/inspector", type: "opensource" },
    { name: "DeepEval for MCP", desc: "Specific metrics for MCP tool usage and task completion", url: "https://docs.deepeval.com/docs/mcp-evaluation", type: "opensource" },
    { name: "Confident AI", desc: "Commercial platform for advanced MCP evaluation features", url: "https://www.confident-ai.com/", type: "proprietary" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tier2/10 to-background border-b border-tier2/20">
        <div className="container px-6 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-tier2">TIER 2</span>
            <span className="text-sm text-muted-foreground mono">Agent Orchestration</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 mono">End-to-End Evaluation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Tier 2 evaluation assesses the ability of AI agents to effectively orchestrate MCP tools to accomplish complex tasks. These evaluations may take hours and can be scheduled to run daily.
          </p>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="container px-6 lg:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/ZTVLYvPCaX6aSbHCCvQh0c/sandbox/C4NumK4IbgLcoKTs7ewoXU-img-3_1770793479000_na1fn_dGllcjItaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlRWTFl2UENhWDZhU2JIQ0N2UWgwYy9zYW5kYm94L0M0TnVtSzRJYmdMY29LVHM3ZXdvWFUtaW1nLTNfMTc3MDc5MzQ3OTAwMF9uYTFmbl9kR2xsY2pJdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JTzyB~n6JVwKRA1mTE5HW09hl-l-VsAUYHitd0tHHXQIiunMJHP2qYIgYTeq9AbRu9mHS7-fZEXbQ8YM2ncBKnxnBg7es7dRIi6aiv7XFjYiwtVxNd75NknEm-OHGe7kTuZwVoGQyxZCXWU6DrEM2KgtU7fIfiwJ4EQ7uUip4iIudaN82pC53xg8ulz1jgE6WumF09yVt6dWfqA3LmZMPng0q2iVlkig~fXZV-iLWem4biT5EOgCEE4ckRAymKKIwoOuFRuFyea3a5b8LePHPys0rdwm7Zl46Ru4JCAOijbjmZx6ukc7TFfnbKRCDLzYToLL9SdRODyj0T1bSZTeFQ__"
            alt="Tier 2 Agent Orchestration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Trajectory Evaluation Section */}
      <section className="container px-6 lg:px-12 py-12">
        <h2 className="text-3xl font-bold mb-8 mono">Trajectory Evaluation</h2>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl mono">Deterministic Assessment</CardTitle>
            <CardDescription>
              Validate the sequence of tool calls, input parameters, and outcome correctness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-secondary/20 border border-border rounded">
              <h4 className="font-semibold mb-3 mono">Key Evaluation Criteria</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="text-foreground">Tool Sequence Validity:</strong> Verify the agent calls tools in a logical order</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="text-foreground">Parameter Correctness:</strong> Ensure each tool receives expected input parameters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="text-foreground">Outcome Verification:</strong> Confirm intended objects are created/updated with correct relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="text-foreground">No Unintended Mutations:</strong> Detect any unexpected side effects or data changes</span>
                </li>
              </ul>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Open Source */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="badge-opensource">Open Source</span>
                </h4>
                <div className="space-y-3">
                  {trajectoryTools.openSource.map((tool) => (
                    <div key={tool.name} className="p-3 bg-card border border-border rounded hover:border-success/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium mono text-sm">{tool.name}</h5>
                          <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                        </div>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-success hover:text-success/80">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proprietary */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="badge-proprietary">Proprietary</span>
                </h4>
                <div className="space-y-3">
                  {trajectoryTools.proprietary.map((tool) => (
                    <div key={tool.name} className="p-3 bg-card border border-border rounded hover:border-tier1/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium mono text-sm">{tool.name}</h5>
                          <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                        </div>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-tier1 hover:text-tier1/80">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Response Evaluation Section */}
      <section className="container px-6 lg:px-12 py-12 bg-card/30">
        <h2 className="text-3xl font-bold mb-8 mono">Response Evaluation</h2>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl mono">LLM Grading</CardTitle>
            <CardDescription>
              Assess response quality through taxonomy accuracy, data accuracy, and qualitative metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="taxonomy" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="taxonomy">Taxonomy</TabsTrigger>
                <TabsTrigger value="data">Data Accuracy</TabsTrigger>
                <TabsTrigger value="quality">Quality</TabsTrigger>
              </TabsList>
              
              <TabsContent value="taxonomy" className="mt-4">
                <div className="p-4 bg-secondary/20 border border-border rounded">
                  <h4 className="font-semibold mb-2 mono text-sm">Taxonomy Accuracy</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Extract metric names, field names, or entity types from the agent response and validate each against a hardcoded list of valid values.
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Extract structured data from natural language responses</p>
                    <p>• Validate against known schema or taxonomy</p>
                    <p>• Flag unknown or deprecated terms</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="data" className="mt-4">
                <div className="p-4 bg-secondary/20 border border-border rounded">
                  <h4 className="font-semibold mb-2 mono text-sm">Data Accuracy</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Extract metrics and values from both the agent response and the actual tool output, then verify they match.
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Compare response data with ground truth from tool outputs</p>
                    <p>• Verify numerical accuracy and formatting</p>
                    <p>• Detect hallucinations or fabricated data</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="quality" className="mt-4">
                <div className="p-4 bg-secondary/20 border border-border rounded">
                  <h4 className="font-semibold mb-2 mono text-sm">Response Quality</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Evaluate qualitative aspects of the response using LLM-as-a-judge or specialized metrics.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground mt-3">
                    <div>
                      <strong className="text-foreground">Completeness:</strong> All requested information included
                    </div>
                    <div>
                      <strong className="text-foreground">Faithfulness:</strong> Response grounded in tool outputs
                    </div>
                    <div>
                      <strong className="text-foreground">Clarity:</strong> Easy to understand and well-structured
                    </div>
                    <div>
                      <strong className="text-foreground">Tone:</strong> Appropriate formality and professionalism
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              {/* Open Source */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="badge-opensource">Open Source</span>
                </h4>
                <div className="space-y-3">
                  {responseTools.openSource.map((tool) => (
                    <div key={tool.name} className="p-3 bg-card border border-border rounded hover:border-success/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium mono text-sm">{tool.name}</h5>
                          <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                        </div>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-success hover:text-success/80">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proprietary */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="badge-proprietary">Proprietary</span>
                </h4>
                <div className="space-y-3">
                  {responseTools.proprietary.map((tool) => (
                    <div key={tool.name} className="p-3 bg-card border border-border rounded hover:border-tier1/50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-medium mono text-sm">{tool.name}</h5>
                          <p className="text-xs text-muted-foreground mt-1">{tool.desc}</p>
                        </div>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-tier1 hover:text-tier1/80">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* MCP-Specific Tools Section */}
      <section className="container px-6 lg:px-12 py-12">
        <h2 className="text-3xl font-bold mb-8 mono">MCP-Specific Tools</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl mono">Specialized MCP Evaluation</CardTitle>
            <CardDescription>
              Tools designed specifically for testing and evaluating Model Context Protocol servers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mcpTools.map((tool) => (
                <div key={tool.name} className={`p-4 bg-card border rounded hover:border-${tool.type === 'opensource' ? 'success' : 'tier1'}/50 transition-colors`}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h5 className="font-medium mono">{tool.name}</h5>
                      <span className={tool.type === 'opensource' ? 'badge-opensource' : 'badge-proprietary'}>
                        {tool.type === 'opensource' ? 'Open Source' : 'Proprietary'}
                      </span>
                    </div>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer" className={`text-${tool.type === 'opensource' ? 'success' : 'tier1'} hover:opacity-80`}>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded">
              <h5 className="font-semibold mb-2 mono text-sm">Recommended Approach</h5>
              <p className="text-sm text-muted-foreground">
                Use <strong className="text-foreground mono">MCP Inspector</strong> for interactive debugging during development, and <strong className="text-foreground mono">DeepEval for MCP</strong> for automated E2E evaluation pipelines that run on a schedule.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="container px-6 lg:px-12 py-16 bg-card/30">
        <h2 className="text-3xl font-bold mb-8 mono">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="mono">Evaluation Frequency</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Run Tier 2 evaluations daily or on-demand</p>
              <p>• Prioritize critical user journeys first</p>
              <p>• Track metrics over time to detect regressions</p>
              <p>• Balance coverage with execution time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mono">Test Case Design</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Create reference trajectories for common tasks</p>
              <p>• Include edge cases and error scenarios</p>
              <p>• Document expected outcomes clearly</p>
              <p>• Use real-world user queries when possible</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
