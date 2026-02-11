/* Swiss Design - Implementation Strategies Page
 * Build from scratch vs leverage existing solutions
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, AlertCircle } from "lucide-react";

export default function Strategies() {
  const buildPros = [
    "Complete control over implementation and features",
    "Deep integration with Meta's existing infrastructure",
    "No vendor lock-in or dependency on third parties",
    "Customized to exact MCP tool evaluation requirements",
  ];

  const buildCons = [
    "High initial investment in engineering resources",
    "Ongoing maintenance and updates required",
    "Reinventing components available as existing solutions",
    "Longer time to production deployment",
  ];

  const leveragePros = [
    "Faster time to value with immediate integration",
    "Reduced development cost and engineering effort",
    "Access to expert support and best practices",
    "Proven solutions with community validation",
  ];

  const leverageCons = [
    "Less flexibility for highly specific requirements",
    "Potential vendor lock-in with proprietary platforms",
    "Integration challenges across multiple vendors",
    "Licensing costs for commercial solutions",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-background border-b border-primary/20">
        <div className="container px-6 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/ZTVLYvPCaX6aSbHCCvQh0c/sandbox/C4NumK4IbgLcoKTs7ewoXU-img-5_1770793478000_na1fn_c3RyYXRlZ3ktaWNvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlRWTFl2UENhWDZhU2JIQ0N2UWgwYy9zYW5kYm94L0M0TnVtSzRJYmdMY29LVHM3ZXdvWFUtaW1nLTVfMTc3MDc5MzQ3ODAwMF9uYTFmbl9jM1J5WVhSbFoza3RhV052YmcucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=AuGP~OIdnkWF5-bmyd9-0u0G6edjqVa5sW6rcLcEHHKmFWCJ1q4083B1k-lN~RoctzdP8ZAgIUtepEvwn~nT2eGfTWLmMOvfhRj9f0PBOsKgUOTDUFy0maeVm1zD6~HZo2476BuyE9nxq9iBVFQNygXbSSC6325jKZEK0X4kuAbWD3stNZsqAG~HzV4HHMERjP7lkReftoJIOE6qBUPpQH4f0q3dFlEtguRg8Gs~ZUeD9BBqOEoH4wmR0fK7OLWN9FWHKiRhjXKX-7cD6gWBoHH1Tq9K-D0fGqkmUt~Pt4~OK0l3QBNSXCiT2ck1aGKVKAXPrRyZHB1nxiSU0nSLDw__"
                alt="Strategy"
                className="w-6 h-6"
              />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 mono">Implementation Strategies</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Two primary approaches for building your MCP tool evaluation system: building from scratch for maximum control, or leveraging existing solutions for faster deployment. Most teams benefit from a hybrid approach.
          </p>
        </div>
      </section>

      {/* Strategy Comparison */}
      <section className="container px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Build from Scratch */}
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl mono flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary text-sm">1</span>
                Build from Scratch
              </CardTitle>
              <CardDescription>
                Custom-built evaluation system tailored to your exact requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-success flex items-center gap-2">
                  <Check size={18} />
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {buildPros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-success mt-0.5">▸</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-destructive flex items-center gap-2">
                  <X size={18} />
                  Challenges
                </h4>
                <ul className="space-y-2">
                  {buildCons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-0.5">▸</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded">
                <h5 className="font-semibold mb-2 mono text-sm">Best For</h5>
                <p className="text-sm text-muted-foreground">
                  Teams with strong engineering resources, unique requirements, and long-term commitment to maintaining custom infrastructure
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Leverage Existing Solutions */}
          <Card className="border-tier2/30">
            <CardHeader>
              <CardTitle className="text-2xl mono flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-tier2/20 flex items-center justify-center text-tier2 text-sm">2</span>
                Leverage Existing Solutions
              </CardTitle>
              <CardDescription>
                Integrate open-source and proprietary tools to accelerate development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-success flex items-center gap-2">
                  <Check size={18} />
                  Advantages
                </h4>
                <ul className="space-y-2">
                  {leveragePros.map((pro, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-success mt-0.5">▸</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-destructive flex items-center gap-2">
                  <X size={18} />
                  Challenges
                </h4>
                <ul className="space-y-2">
                  {leverageCons.map((con, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive mt-0.5">▸</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 p-4 bg-tier2/10 border border-tier2/30 rounded">
                <h5 className="font-semibold mb-2 mono text-sm">Best For</h5>
                <p className="text-sm text-muted-foreground">
                  Teams seeking rapid deployment, proven solutions, and the ability to focus on MCP-specific challenges rather than foundational infrastructure
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hybrid Approach */}
      <section className="container px-6 lg:px-12 py-16 bg-card/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold mono">Recommended: Hybrid Approach</h2>
          </div>
          
          <Card className="border-primary/30">
            <CardHeader>
              <CardTitle className="text-xl mono">Best of Both Worlds</CardTitle>
              <CardDescription>
                Combine open-source flexibility with proprietary robustness for an optimal solution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 mono">For Tier 1 Integration Testing</h4>
                <div className="p-4 bg-secondary/20 border border-border rounded space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Start with open-source foundations:</strong> Use OpenAPI Specification with Dredd for schema validation, Jest for snapshot testing, and Rest-Assured or Karate DSL for runtime correctness.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Add proprietary tools for scale:</strong> Consider Postman for team collaboration and broader API lifecycle management, or ReadyAPI for enterprise-level features as your needs grow.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 mono">For Tier 2 E2E Evaluation</h4>
                <div className="p-4 bg-secondary/20 border border-border rounded space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Begin with open-source evaluation:</strong> Use DeepEval and Langfuse/Phoenix for trajectory and response evaluation during development and initial testing phases.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Scale with proprietary platforms:</strong> Integrate LangSmith, Arize AI, or Braintrust as you move to production for advanced features, collaboration, and enterprise support.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 mono">MCP-Specific Components</h4>
                <div className="p-4 bg-primary/10 border border-primary/30 rounded space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    Always use <strong className="text-foreground mono">MCP Inspector</strong> for interactive debugging and <strong className="text-foreground mono">DeepEval for MCP</strong> for automated evaluation. These tools are specifically designed for the MCP ecosystem and provide capabilities not available in general-purpose solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Decision Framework */}
      <section className="container px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-bold mb-8 mono">Decision Framework</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="mono">Team Size & Expertise</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Small teams:</strong> Leverage existing solutions to maximize productivity</p>
              <p><strong className="text-foreground">Large teams:</strong> Consider building custom components for unique needs</p>
              <p><strong className="text-foreground">Mixed expertise:</strong> Use proprietary platforms with better UX for broader adoption</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mono">Timeline & Budget</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Tight timeline:</strong> Prioritize existing solutions for faster deployment</p>
              <p><strong className="text-foreground">Long-term project:</strong> Invest in custom infrastructure if justified</p>
              <p><strong className="text-foreground">Budget constraints:</strong> Open-source tools offer powerful capabilities at zero licensing cost</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="mono">Requirements Specificity</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p><strong className="text-foreground">Standard needs:</strong> Existing solutions likely cover 80%+ of requirements</p>
              <p><strong className="text-foreground">Unique workflows:</strong> Custom components may be necessary for specialized evaluation</p>
              <p><strong className="text-foreground">Evolving needs:</strong> Start with flexible open-source, add proprietary as needed</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
