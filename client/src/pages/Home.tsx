/* Swiss Design - Home Page
 * Asymmetric layout with hero background
 * Technical documentation aesthetic
 */

import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, Target, Zap } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/ZTVLYvPCaX6aSbHCCvQh0c/sandbox/C4NumK4IbgLcoKTs7ewoXU-img-1_1770793475000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWlRWTFl2UENhWDZhU2JIQ0N2UWgwYy9zYW5kYm94L0M0TnVtSzRJYmdMY29LVHM3ZXdvWFUtaW1nLTFfMTc3MDc5MzQ3NTAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uPUCHC7Uwnlh2SlL19gscmJBJf03P-tG5sTIajT8wGFQqm4UcVroXbe65jiv2o4aFbKvUR3Kdc4Aoe7-ZPZpRjFI0tpISyc~XpbYszfGCIB1NExLBeH04yf4mpVVI5PNFU13knp3uwt7a40QdmkY1nVMaBNq9lxbh16CBbM1Rmo9VQ8jjkYbEFXBCv5DfMEE0ulrpRUwZGbUr2lUHlucbch~q3f6JH8fUKKhAxqNpQSJkcL491wRJMnY66BVkecY2RYDUgd9hmqFygLiRxlNPf3srkaMV0o4qcA6N1NbIv4333gCgW-piBqnBIBDkLkv5YqgZdrBdiHE6vJW2RCc0w__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="container relative z-10 px-6 lg:px-12 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 mono">
              MCP Tool <span className="text-primary">Evaluation</span> Guide
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              A comprehensive framework for implementing two-tier evaluation systems for Model Context Protocol tools. Built for teams building MCP servers for Meta Ads API and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/tier1">
                <Button size="lg" className="text-base">
                  Explore Tier 1 Testing
                </Button>
              </Link>
              <Link href="/tier2">
                <Button size="lg" variant="outline" className="text-base">
                  Explore Tier 2 Evaluation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container px-6 lg:px-12 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 mono">Two-Tier Evaluation Framework</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            This guide presents a comprehensive approach to evaluating MCP tools through two complementary tiers: integration testing for individual tool validation and end-to-end evaluation for agent orchestration assessment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Tier 1 Card */}
          <Card className="border-tier1/30 hover:border-tier1/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-tier1/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-tier1" />
                </div>
                <span className="badge-tier1">TIER 1</span>
              </div>
              <CardTitle className="text-2xl">Integration Testing</CardTitle>
              <CardDescription className="text-base">
                Single-tool execution validation focusing on contract compliance and runtime correctness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-tier1 mt-0.5">▸</span>
                  <span><strong className="mono">Schema Validation:</strong> Input/output contract verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier1 mt-0.5">▸</span>
                  <span><strong className="mono">Golden Snapshots:</strong> Detect field changes and schema drift</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier1 mt-0.5">▸</span>
                  <span><strong className="mono">Runtime Correctness:</strong> Output and outcome validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier1 mt-0.5">▸</span>
                  <span><strong className="mono">Error Mapping:</strong> API error to tool error translation</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/tier1">
                  <Button variant="outline" className="w-full border-tier1/30 hover:border-tier1 hover:bg-tier1/10">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Tier 2 Card */}
          <Card className="border-tier2/30 hover:border-tier2/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-lg bg-tier2/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-tier2" />
                </div>
                <span className="badge-tier2">TIER 2</span>
              </div>
              <CardTitle className="text-2xl">E2E Evaluation</CardTitle>
              <CardDescription className="text-base">
                Agent orchestration assessment with trajectory and response evaluation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="mono">Trajectory Evaluation:</strong> Tool sequence and parameter validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="mono">Outcome Assessment:</strong> Object creation and relationship verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="mono">LLM Grading:</strong> Taxonomy and data accuracy evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tier2 mt-0.5">▸</span>
                  <span><strong className="mono">Response Quality:</strong> Completeness, faithfulness, and clarity</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/tier2">
                  <Button variant="outline" className="w-full border-tier2/30 hover:border-tier2 hover:bg-tier2/10">
                    Learn More →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="container px-6 lg:px-12 py-16 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 mono text-center">Why This Framework Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 mono">Fast Iteration</h3>
              <p className="text-sm text-muted-foreground">
                Tier 1 tests run in minutes, enabling rapid feedback for every tool change
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2 mono">Comprehensive Coverage</h3>
              <p className="text-sm text-muted-foreground">
                From schema validation to agent orchestration, covering all quality dimensions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tier2/20 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-tier2" />
              </div>
              <h3 className="text-lg font-semibold mb-2 mono">Production Ready</h3>
              <p className="text-sm text-muted-foreground">
                Battle-tested strategies for both building from scratch and leveraging existing solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-6 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 mono">Ready to Build Your Evaluation System?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Explore our implementation strategies and tool recommendations to get started
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/strategies">
              <Button size="lg" variant="default">
                View Strategies
              </Button>
            </Link>
            <Link href="/recommendations">
              <Button size="lg" variant="outline">
                See Recommendations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
