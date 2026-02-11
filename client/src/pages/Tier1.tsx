/* Swiss Design - Tier 1 Integration Testing Page
 * Technical documentation with two-column layout
 * Color-coded badges for tool categories
 */

import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ExternalLink } from "lucide-react";

export default function Tier1() {
  const schemaTools = {
    openSource: [
      { name: "AJV", desc: "Fast JSON Schema validator for Node.js", url: "https://ajv.js.org/" },
      { name: "Dredd", desc: "HTTP API validation against OpenAPI", url: "https://dredd.org/" },
      { name: "Zod", desc: "TypeScript-first schema validation", url: "https://zod.dev/" },
      { name: "Joi", desc: "Powerful schema description for JavaScript", url: "https://joi.dev/" },
    ],
    proprietary: [
      { name: "SwaggerHub", desc: "API design and validation platform", url: "https://swagger.io/" },
      { name: "ReadyAPI", desc: "Comprehensive API testing solution", url: "https://smartbear.com/product/readyapi/" },
      { name: "Postman", desc: "API development and testing platform", url: "https://www.postman.com/" },
    ],
  };

  const snapshotTools = {
    openSource: [
      { name: "Jest", desc: "JavaScript testing with snapshot support", url: "https://jestjs.io/docs/snapshot-testing" },
      { name: "Insta", desc: "Snapshot testing for Rust", url: "https://insta.rs/" },
      { name: "Snapshooter", desc: ".NET snapshot testing tool", url: "https://swisslife-oss.github.io/snapshooter/" },
    ],
    proprietary: [
      { name: "BrowserStack Percy", desc: "AI-powered visual testing platform", url: "https://www.browserstack.com/percy" },
    ],
  };

  const runtimeTools = {
    openSource: [
      { name: "Rest-Assured", desc: "Java DSL for RESTful API testing", url: "https://rest-assured.io/" },
      { name: "Karate DSL", desc: "BDD-style API test automation", url: "https://github.com/karatelabs/karate" },
    ],
    proprietary: [
      { name: "Postman", desc: "Comprehensive API testing platform", url: "https://www.postman.com/" },
      { name: "ReadyAPI", desc: "Enterprise API testing solution", url: "https://smartbear.com/product/readyapi/" },
    ],
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-tier1/10 to-background border-b border-tier1/20">
        <div className="container px-6 lg:px-12 py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="badge-tier1">TIER 1</span>
            <span className="text-sm text-muted-foreground mono">Single-Tool Execution</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 mono">Integration Testing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Tier 1 evaluation focuses on validating the correctness of individual MCP tools in isolation. These tests should complete in minutes and run on every tool change.
          </p>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="container px-6 lg:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <img 
            src="https://private-us-east-1.manuscdn.com/sessionFile/ZTVLYvPCaX6aSbHCCvQh0c/sandbox/C4NumK4IbgLcoKTs7ewoXU-img-2_1770793493000_na1fn_dGllcjEtaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlRWTFl2UENhWDZhU2JIQ0N2UWgwYy9zYW5kYm94L0M0TnVtSzRJYmdMY29LVHM3ZXdvWFUtaW1nLTJfMTc3MDc5MzQ5MzAwMF9uYTFmbl9kR2xsY2pFdGFXeHNkWE4wY21GMGFXOXUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=S~NK3qCEqr-pzZ1k~cLZJP5fgfntat8HO3GKIf7US7RmbQdp-~1DEyXAQmkF4Fz1WrqUwdvIGNEStGaroVmr~-YOFIA0KYOLzeYF2q1Yn6-cCwnFa5G5TaXuZg8Lp1b1DdxCnO9c-wojiXzsw~c2vRcDx8nWKSgL-uxuZYCWzLEzQK922oRkrOapspOBYzm-EY0qHUsAQ1AdqGTOXaxxZjPCxNtE4Oc1q75EOFWMHOO7QyEO95u1L-BFbgSejmeFiIPoCdJJ~Epg3n~nQITNEd2NcqwQr78Lli0K2b2bGG3ORD4lilcxyPdvmz0YGeaXku4MGhmDh1nZTSKOk~FzkQ__"
            alt="Tier 1 Integration Testing Layers"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      {/* Contract / Compliance Section */}
      <section className="container px-6 lg:px-12 py-12">
        <h2 className="text-3xl font-bold mb-8 mono">Contract / Compliance Testing</h2>
        
        {/* Schema Validation */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl mono">Schema Validation</CardTitle>
            <CardDescription>
              Verify that inputs and outputs conform to predefined schemas, ensuring structural integrity and data conformity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Open Source */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="badge-opensource">Open Source</span>
                </h4>
                <div className="space-y-3">
                  {schemaTools.openSource.map((tool) => (
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
                  {schemaTools.proprietary.map((tool) => (
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

        {/* Golden Snapshots */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl mono">Golden Snapshots</CardTitle>
            <CardDescription>
              Compare tool outputs against approved snapshots to detect unintended changes in fields, requiredness, and enums
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Open Source */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="badge-opensource">Open Source</span>
                </h4>
                <div className="space-y-3">
                  {snapshotTools.openSource.map((tool) => (
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
                  {snapshotTools.proprietary.map((tool) => (
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

      {/* Runtime Correctness Section */}
      <section className="container px-6 lg:px-12 py-12 bg-card/30">
        <h2 className="text-3xl font-bold mb-8 mono">Runtime Correctness</h2>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl mono">Output & Outcome Validation</CardTitle>
            <CardDescription>
              Verify that tools return expected data and successfully perform intended mutations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Open Source */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="badge-opensource">Open Source</span>
                </h4>
                <div className="space-y-3">
                  {runtimeTools.openSource.map((tool) => (
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
                  {runtimeTools.proprietary.map((tool) => (
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

            <div className="mt-6 p-4 bg-secondary/30 border border-border rounded">
              <h5 className="font-semibold mb-2 mono text-sm">Meta Ads API Specific</h5>
              <p className="text-sm text-muted-foreground mb-3">
                For outcome correctness testing of write operations, the <strong className="mono text-foreground">Meta Marketing API Sandbox</strong> is essential for safe testing without affecting production data.
              </p>
              <a 
                href="https://developers.facebook.com/blog/post/2023/06/21/marketing-api-sandbox-capability-now-re-enabled/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 text-sm mono flex items-center gap-1"
              >
                Learn about Meta API Sandbox <ExternalLink size={14} />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Error Mapping */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl mono">Error Mapping</CardTitle>
            <CardDescription>
              Ensure Ads API errors are correctly translated to MCP tool error codes and messages
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="approach">
                <AccordionTrigger className="text-sm font-medium">Testing Approach</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Error mapping requires custom test logic to trigger various error conditions and verify correct error responses. Use mocking tools to simulate API errors:
                  </p>
                  <div className="space-y-2">
                    <div className="p-3 bg-card border border-border rounded">
                      <h5 className="font-medium mono text-sm mb-1">Mockoon</h5>
                      <p className="text-xs text-muted-foreground">Open-source mock API server for simulating error responses</p>
                      <a href="https://mockoon.com/" target="_blank" rel="noopener noreferrer" className="text-success hover:text-success/80 text-xs mono flex items-center gap-1 mt-2">
                        Visit Mockoon <ExternalLink size={12} />
                      </a>
                    </div>
                    <div className="p-3 bg-card border border-border rounded">
                      <h5 className="font-medium mono text-sm mb-1">Microcks.io</h5>
                      <p className="text-xs text-muted-foreground">Kubernetes-native API mocking and testing tool</p>
                      <a href="https://microcks.io/" target="_blank" rel="noopener noreferrer" className="text-success hover:text-success/80 text-xs mono flex items-center gap-1 mt-2">
                        Visit Microcks <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="container px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-bold mb-8 mono">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="mono">CI/CD Integration</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Run Tier 1 tests on every tool change</p>
              <p>• Target execution time under 5 minutes</p>
              <p>• Fail builds on schema violations</p>
              <p>• Automate snapshot updates with review process</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="mono">Test Data Management</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>• Use Meta API Sandbox for write operations</p>
              <p>• Maintain golden snapshots in version control</p>
              <p>• Document expected error scenarios</p>
              <p>• Isolate tests to prevent interference</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
