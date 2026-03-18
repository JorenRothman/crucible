import Link from "next/link";
import { ArrowRight, Flame, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Crucible</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Get started
          </Link>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
              <Zap className="w-3 h-3" />
              <span>Forge your ideas</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Build with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600">
                intention
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A refined platform for creating, testing, and iterating on your projects. 
              Where ideas are forged into reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-all hover:scale-105"
            >
              Start building
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted transition-colors"
            >
              Sign in
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-border/50">
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto sm:mx-0">
                <Zap className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="font-medium">Lightning fast</h3>
              <p className="text-sm text-muted-foreground">
                Built on cutting-edge technology for optimal performance
              </p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mx-auto sm:mx-0">
                <Shield className="w-5 h-5 text-amber-500" />
              </div>
              <h3 className="font-medium">Secure by default</h3>
              <p className="text-sm text-muted-foreground">
                Enterprise-grade authentication and data protection
              </p>
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-10 h-10 rounded-lg bg-orange-600/10 flex items-center justify-center mx-auto sm:mx-0">
                <Flame className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="font-medium">Forge ahead</h3>
              <p className="text-sm text-muted-foreground">
                Tools designed to help you ship faster and better
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-6 py-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Crucible. All rights reserved.</p>
      </footer>
    </div>
  );
}
