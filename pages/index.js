import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Database, Wrench, CalendarClock, FileSearch, BarChart3, CheckCircle2, Building2, Zap, CircleDot } from 'lucide-react';
import { Card, CardContent, Button } from '../components/ui/basic';

const navItems = ['Platform', 'Use Cases', 'Data', 'Insights', 'Contact'];

const pillars = [
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: 'Maintenance intelligence',
    text: 'Turn plant records, outage histories, and procedure libraries into clear maintenance visibility for operators, vendors, and planners.',
  },
  {
    icon: <CalendarClock className="h-6 w-6" />,
    title: 'Projected work schedules',
    text: 'Map likely upcoming maintenance by component, system, and plant so teams can prepare earlier and pursue work with more confidence.',
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: 'Nuclear-grade rigor',
    text: 'Built for a world where accuracy, traceability, and operational context matter as much as speed.',
  },
];

const modules = [
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Plant task registry',
    text: 'A structured database of major components, maintenance procedures, periodicities, and last-known work dates.',
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: 'Outage work visibility',
    text: 'Track what plants recently completed during refueling and maintenance outages to sharpen future planning.',
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: 'Vendor opportunity signals',
    text: 'Surface where maintenance demand is likely building so suppliers can align outreach, inventory, and support.',
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: 'Procedure-backed insight',
    text: 'Connect each maintenance recommendation to procedure logic, plant context, and a traceable reference path.',
  },
];

const useCases = [
  'Operators preparing for future maintenance windows',
  'Vendors targeting upcoming plant needs with better timing',
  'New nuclear teams building maintenance programs from the ground up',
  'Analysts monitoring fleet-wide outage and equipment patterns',
];

const stats = [
  { label: 'Plant systems organized', value: 'Fleet-ready' },
  { label: 'Maintenance focus', value: 'Component-level' },
  { label: 'Primary output', value: 'Actionable timing' },
  { label: 'Built for', value: 'Nuclear operations' },
];

export default function NuclearMaintenanceHomepage() {
  return (
    <div className="min-h-screen bg-[#08111f] text-white" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-[32rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-4rem] h-[20rem] w-[20rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_35%)]" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#08111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/25 bg-white/5 shadow-lg shadow-cyan-400/10">
              <CircleDot className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <div className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300/90">Nuclear Maintenance</div>
              <div className="text-lg font-semibold text-white">Maintenance235</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="text-sm text-white/75 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <Button className="rounded-full bg-white text-slate-900 hover:bg-white/90">
            Book a Demo
          </Button>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Zap className="h-4 w-4" />
                Built for outage planning, component visibility, and maintenance execution
              </div>

              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                Powering nuclear maintenance with better data, better timing, and better decisions.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                A modern platform for turning nuclear plant maintenance history, procedure logic, and outage signals into usable operational intelligence.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-cyan-300 px-7 text-slate-950 hover:bg-cyan-200">
                  Explore the Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10">
                  View Use Cases
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="rounded-3xl border-white/10 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur">
                    <CardContent className="p-5">
                      <div className="text-xl font-semibold text-white">{stat.value}</div>
                      <div className="mt-2 text-sm leading-6 text-white/60">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.04))] p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#091527] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Live concept</div>
                      <div className="mt-2 text-2xl font-semibold">Fleet maintenance dashboard</div>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      Predictive view
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-white/55">Next likely major work</div>
                          <div className="mt-2 text-2xl font-semibold">Reactor coolant pump seal package</div>
                        </div>
                        <div className="rounded-2xl bg-cyan-300/10 px-3 py-2 text-sm text-cyan-200">Q4 outlook</div>
                      </div>
                      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300" />
                      </div>
                      <div className="mt-3 text-sm text-white/60">Confidence informed by periodicity, outage cadence, and recent plant records.</div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <div className="text-sm text-white/55">Signals monitored</div>
                        <div className="mt-3 space-y-3">
                          {['Procedure intervals', 'Outage history', 'Component work packages'].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-sm text-white/85">
                              <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                        <div className="text-sm text-white/55">Primary users</div>
                        <div className="mt-3 space-y-3">
                          {['Utilities', 'Vendors', 'Program builders'].map((item) => (
                            <div key={item} className="flex items-center gap-3 text-sm text-white/85">
                              <Building2 className="h-4 w-4 text-emerald-300" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 p-4">
                      <div className="text-sm text-cyan-100/80">What this unlocks</div>
                      <div className="mt-2 text-lg font-medium leading-8 text-white">
                        A clearer picture of what work plants are likely preparing for next and how maintenance demand may unfold across the fleet.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <Card key={pillar.title} className="rounded-[2rem] border-white/10 bg-white/5 shadow-xl shadow-black/10">
                  <CardContent className="p-8">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-4 text-base leading-8 text-white/68">{pillar.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Platform modules</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                A maintenance platform designed for the realities of nuclear operations.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
                Built around component-level maintenance logic, outage intelligence, and the operational need to prepare early with credible signals.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {modules.map((module) => (
                <Card key={module.title} className="rounded-[2rem] border-white/10 bg-[#0d1728] shadow-xl shadow-black/20">
                  <CardContent className="p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-cyan-200">
                      {module.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                    <p className="mt-3 text-base leading-7 text-white/65">{module.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="grid gap-8 rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(18,34,58,0.95),rgba(8,17,31,0.92))] p-8 shadow-2xl shadow-cyan-500/10 lg:grid-cols-[1fr_1fr] lg:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Use cases</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                From vendor outreach to fleet-wide planning.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/68">
                This concept is meant to serve both the business side of maintenance and the operational side of maintenance.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-emerald-300" />
                  <div className="text-base leading-7 text-white/82">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 px-8 py-12 text-center shadow-2xl shadow-black/20 lg:px-12">
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Future direction</div>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Build the operating layer for nuclear maintenance intelligence.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/68">
              Create a trusted system for organizing procedures, projecting future work, understanding past outages, and helping the nuclear ecosystem act earlier and with more confidence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white px-8 text-slate-950 hover:bg-white/90">
                Request Early Access
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-8 text-white hover:bg-white/10">
                Talk Through the Vision
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/55 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>© 2026 Maintenance235. Nuclear maintenance intelligence for a more prepared fleet.</div>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Contact</a>
            <a href="#" className="transition hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
