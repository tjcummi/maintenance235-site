import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarClock,
  Search,
  Filter,
  Building2,
  Factory,
  ArrowUpRight,
  Clock3,
  Activity,
  SlidersHorizontal,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent, Button } from '../components/ui/basic';

const outageData = [
  { plant: 'Arkansas Nuclear One', unit: '1', operator: 'Entergy Arkansas LLC', lastOutageAnchor: '2025-10-11', cycleMonths: 18, predictedNextOutage: '2027-04-11', predictedOutageAfterNext: '2028-10-11' },
  { plant: 'Arkansas Nuclear One', unit: '2', operator: 'Entergy Arkansas LLC', lastOutageAnchor: '2026-03-16', cycleMonths: 18, predictedNextOutage: '2027-09-16', predictedOutageAfterNext: '2029-03-16' },
  { plant: 'Beaver Valley', unit: '1', operator: 'Vistra Corporation', lastOutageAnchor: '2025-10-12', cycleMonths: 18, predictedNextOutage: '2027-04-12', predictedOutageAfterNext: '2028-10-12' },
  { plant: 'Beaver Valley', unit: '2', operator: 'Vistra Corporation', lastOutageAnchor: '2024-10-13', cycleMonths: 18, predictedNextOutage: '2026-04-13', predictedOutageAfterNext: '2027-10-13' },
  { plant: 'Braidwood Generation Station', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-10-06', cycleMonths: 18, predictedNextOutage: '2027-04-06', predictedOutageAfterNext: '2028-10-06' },
  { plant: 'Braidwood Generation Station', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-10-06', cycleMonths: 18, predictedNextOutage: '2027-04-06', predictedOutageAfterNext: '2028-10-06' },
  { plant: 'Browns Ferry', unit: '1', operator: 'Tennessee Valley Authority', lastOutageAnchor: '2024-08-30', cycleMonths: 24, predictedNextOutage: '2026-08-30', predictedOutageAfterNext: '2028-08-30' },
  { plant: 'Browns Ferry', unit: '2', operator: 'Tennessee Valley Authority', lastOutageAnchor: '2025-03-05', cycleMonths: 24, predictedNextOutage: '2027-03-05', predictedOutageAfterNext: '2029-03-05' },
  { plant: 'Browns Ferry', unit: '3', operator: 'Tennessee Valley Authority', lastOutageAnchor: '2026-02-20', cycleMonths: 24, predictedNextOutage: '2028-02-20', predictedOutageAfterNext: '2030-02-20' },
  { plant: 'Byron Nuclear Generating Station', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-09-15', cycleMonths: 18, predictedNextOutage: '2027-03-15', predictedOutageAfterNext: '2028-09-15' },
  { plant: 'Byron Nuclear Generating Station', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-04-07', cycleMonths: 18, predictedNextOutage: '2026-10-07', predictedOutageAfterNext: '2028-04-07' },
  { plant: 'Callaway Plant', unit: '1', operator: 'Ameren Missouri', lastOutageAnchor: '2025-10-4', cycleMonths: 18, predictedNextOutage: '2027-04-04', predictedOutageAfterNext: '2028-10-04' },
  { plant: 'Calvert Cliffs Nuclear Power Plant', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2026-03-28', cycleMonths: 24, predictedNextOutage: '2028-03-28', predictedOutageAfterNext: '2030-03-28' },
  { plant: 'Calvert Cliffs Nuclear Power Plant', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-04-05', cycleMonths: 24, predictedNextOutage: '2027-04-05', predictedOutageAfterNext: '2029-04-05' },
  { plant: 'Catawba Nuclear Station', unit: '1', operator: 'Duke Energy', lastOutageAnchor: '2025-09-06', cycleMonths: 18, predictedNextOutage: '2027-03-06', predictedOutageAfterNext: '2028-09-06' },
  { plant: 'Catawba Nuclear Station', unit: '2', operator: 'Duke Energy', lastOutageAnchor: '2025-04-19', cycleMonths: 18, predictedNextOutage: '2026-10-19', predictedOutageAfterNext: '2028-04-19' },
  { plant: 'Clinton Power Station', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-09-13', cycleMonths: 24, predictedNextOutage: '2027-09-13', predictedOutageAfterNext: '2029-09-13' },
  { plant: 'Columbia Generating Station', unit: '1', operator: 'Energy Northwest', lastOutageAnchor: '2025-04-11', cycleMonths: 24, predictedNextOutage: '2027-04-11', predictedOutageAfterNext: '2029-04-11' },
  { plant: 'Comanche Peak Nuclear Power Plant', unit: '1', operator: 'Vistra Corporation', lastOutageAnchor: '2025-09-27', cycleMonths: 18, predictedNextOutage: '2027-03-27', predictedOutageAfterNext: '2028-09-27' },
  { plant: 'Comanche Peak Nuclear Power Plant', unit: '2', operator: 'Vistra Corporation', lastOutageAnchor: '2025-03-22', cycleMonths: 18, predictedNextOutage: '2026-09-22', predictedOutageAfterNext: '2028-03-22' },
  { plant: 'Cook Nuclear Plant', unit: '1', operator: 'Indiana Michigan Power', lastOutageAnchor: '2025-09-17', cycleMonths: 18, predictedNextOutage: '2027-03-17', predictedOutageAfterNext: '2028-09-17' },
  { plant: 'Cook Nuclear Plant', unit: '2', operator: 'Indiana Michigan Power', lastOutageAnchor: '2025-04-05', cycleMonths: 18, predictedNextOutage: '2026-10-05', predictedOutageAfterNext: '2028-04-05' },
  { plant: 'Cooper Nuclear Station', unit: '1', operator: 'Nebraska Public Power District', lastOutageAnchor: '2026-03-28', cycleMonths: 24, predictedNextOutage: '2028-03-28', predictedOutageAfterNext: '2030-03-28' },
  { plant: 'Davis-Besse Nuclear Power Station', unit: '1', operator: 'Vistra Corporation', lastOutageAnchor: '2026-03-07', cycleMonths: 24, predictedNextOutage: '2028-03-07', predictedOutageAfterNext: '2030-03-07' },
  { plant: 'Diablo Canyon Power Plant', unit: '1', operator: 'Pacific Gas and Electric', lastOutageAnchor: '2025-03-23', cycleMonths: 18, predictedNextOutage: '2026-09-23', predictedOutageAfterNext: '2028-03-23' },
  { plant: 'Diablo Canyon Power Plant', unit: '2', operator: 'Pacific Gas and Electric', lastOutageAnchor: '2025-10-12', cycleMonths: 18, predictedNextOutage: '2027-04-12', predictedOutageAfterNext: '2028-10-12' },
  { plant: 'Donald C. Cook Nuclear Plant', unit: '1', operator: 'Indiana Michigan Power', lastOutageAnchor: '2025-09-17', cycleMonths: 18, predictedNextOutage: '2027-03-17', predictedOutageAfterNext: '2028-09-17' },
  { plant: 'Donald C. Cook Nuclear Plant', unit: '2', operator: 'Indiana Michigan Power', lastOutageAnchor: '2025-04-05', cycleMonths: 18, predictedNextOutage: '2026-10-05', predictedOutageAfterNext: '2028-04-05' },
  { plant: 'Dresden Nuclear Power Station', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-11-08', cycleMonths: 24, predictedNextOutage: '2027-11-08', predictedOutageAfterNext: '2029-11-08' },
  { plant: 'Dresden Nuclear Power Station', unit: '3', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-04-26', cycleMonths: 24, predictedNextOutage: '2027-04-26', predictedOutageAfterNext: '2029-04-26' },
  { plant: 'Duane Arnold Energy Center', unit: '1', operator: 'NextEra Energy', lastOutageAnchor: '2020-10-30', cycleMonths: 24, predictedNextOutage: '2026-10-30', predictedOutageAfterNext: '2028-10-30' },
  { plant: 'Farley Nuclear Plant', unit: '1', operator: 'Southern Nuclear', lastOutageAnchor: '2025-02-22', cycleMonths: 18, predictedNextOutage: '2026-08-22', predictedOutageAfterNext: '2028-02-22' },
  { plant: 'Farley Nuclear Plant', unit: '2', operator: 'Southern Nuclear', lastOutageAnchor: '2025-10-18', cycleMonths: 18, predictedNextOutage: '2027-04-18', predictedOutageAfterNext: '2028-10-18' },
  { plant: 'Fermi Nuclear Power Plant', unit: '2', operator: 'DTE Energy', lastOutageAnchor: '2024-09-28', cycleMonths: 24, predictedNextOutage: '2026-09-28', predictedOutageAfterNext: '2028-09-28' },
  { plant: 'FitzPatrick Nuclear Power Plant', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-03-15', cycleMonths: 24, predictedNextOutage: '2027-03-15', predictedOutageAfterNext: '2029-03-15' },
  { plant: 'Fort Calhoun Station', unit: '1', operator: 'Omaha Public Power District', lastOutageAnchor: '2016-10-24', cycleMonths: 18, predictedNextOutage: '2026-04-24', predictedOutageAfterNext: '2027-10-24' },
  { plant: 'Grand Gulf Nuclear Station', unit: '1', operator: 'Entergy Operations', lastOutageAnchor: '2025-03-08', cycleMonths: 24, predictedNextOutage: '2027-03-08', predictedOutageAfterNext: '2029-03-08' },
  { plant: 'Harris Nuclear Plant', unit: '1', operator: 'Duke Energy', lastOutageAnchor: '2025-11-08', cycleMonths: 24, predictedNextOutage: '2027-11-08', predictedOutageAfterNext: '2029-11-08' },
  { plant: 'Hatch Nuclear Plant', unit: '1', operator: 'Southern Nuclear', lastOutageAnchor: '2025-03-01', cycleMonths: 24, predictedNextOutage: '2027-03-01', predictedOutageAfterNext: '2029-03-01' },
  { plant: 'Hatch Nuclear Plant', unit: '2', operator: 'Southern Nuclear', lastOutageAnchor: '2025-10-18', cycleMonths: 24, predictedNextOutage: '2027-10-18', predictedOutageAfterNext: '2029-10-18' },
  { plant: 'Hope Creek Generating Station', unit: '1', operator: 'PSEG Nuclear', lastOutageAnchor: '2025-10-25', cycleMonths: 24, predictedNextOutage: '2027-10-25', predictedOutageAfterNext: '2029-10-25' },
  { plant: 'Indian Point Energy Center', unit: '2', operator: 'Holtec', lastOutageAnchor: '2020-04-30', cycleMonths: 18, predictedNextOutage: '2026-10-30', predictedOutageAfterNext: '2028-04-30' },
  { plant: 'Indian Point Energy Center', unit: '3', operator: 'Holtec', lastOutageAnchor: '2021-04-30', cycleMonths: 18, predictedNextOutage: '2026-10-30', predictedOutageAfterNext: '2028-04-30' },
  { plant: 'LaSalle County Nuclear Generating Station', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-03-29', cycleMonths: 24, predictedNextOutage: '2027-03-29', predictedOutageAfterNext: '2029-03-29' },
  { plant: 'LaSalle County Nuclear Generating Station', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-11-22', cycleMonths: 24, predictedNextOutage: '2027-11-22', predictedOutageAfterNext: '2029-11-22' },
  { plant: 'Limerick Generating Station', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-10-11', cycleMonths: 24, predictedNextOutage: '2027-10-11', predictedOutageAfterNext: '2029-10-11' },
  { plant: 'Limerick Generating Station', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-03-22', cycleMonths: 24, predictedNextOutage: '2027-03-22', predictedOutageAfterNext: '2029-03-22' },
  { plant: 'McGuire Nuclear Station', unit: '1', operator: 'Duke Energy', lastOutageAnchor: '2025-10-11', cycleMonths: 18, predictedNextOutage: '2027-04-11', predictedOutageAfterNext: '2028-10-11' },
  { plant: 'McGuire Nuclear Station', unit: '2', operator: 'Duke Energy', lastOutageAnchor: '2025-03-29', cycleMonths: 18, predictedNextOutage: '2026-09-29', predictedOutageAfterNext: '2028-03-29' },
  { plant: 'Millstone Power Station', unit: '2', operator: 'Dominion Energy', lastOutageAnchor: '2024-10-05', cycleMonths: 24, predictedNextOutage: '2026-10-05', predictedOutageAfterNext: '2028-10-05' },
  { plant: 'Millstone Power Station', unit: '3', operator: 'Dominion Energy', lastOutageAnchor: '2025-04-19', cycleMonths: 24, predictedNextOutage: '2027-04-19', predictedOutageAfterNext: '2029-04-19' },
  { plant: 'Monticello Nuclear Generating Plant', unit: '1', operator: 'Xcel Energy', lastOutageAnchor: '2025-09-13', cycleMonths: 24, predictedNextOutage: '2027-09-13', predictedOutageAfterNext: '2029-09-13' },
  { plant: 'Nine Mile Point Nuclear Station', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2026-03-14', cycleMonths: 24, predictedNextOutage: '2028-03-14', predictedOutageAfterNext: '2030-03-14' },
  { plant: 'Nine Mile Point Nuclear Station', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-04-26', cycleMonths: 24, predictedNextOutage: '2027-04-26', predictedOutageAfterNext: '2029-04-26' },
  { plant: 'North Anna Power Station', unit: '1', operator: 'Dominion Energy', lastOutageAnchor: '2025-09-06', cycleMonths: 18, predictedNextOutage: '2027-03-06', predictedOutageAfterNext: '2028-09-06' },
  { plant: 'North Anna Power Station', unit: '2', operator: 'Dominion Energy', lastOutageAnchor: '2025-03-01', cycleMonths: 18, predictedNextOutage: '2026-09-01', predictedOutageAfterNext: '2028-03-01' },
  { plant: 'Oconee Nuclear Station', unit: '1', operator: 'Duke Energy', lastOutageAnchor: '2025-02-15', cycleMonths: 18, predictedNextOutage: '2026-08-15', predictedOutageAfterNext: '2028-02-15' },
  { plant: 'Oconee Nuclear Station', unit: '2', operator: 'Duke Energy', lastOutageAnchor: '2025-10-11', cycleMonths: 18, predictedNextOutage: '2027-04-11', predictedOutageAfterNext: '2028-10-11' },
  { plant: 'Oconee Nuclear Station', unit: '3', operator: 'Duke Energy', lastOutageAnchor: '2025-05-03', cycleMonths: 18, predictedNextOutage: '2026-11-03', predictedOutageAfterNext: '2028-05-03' },
  { plant: 'Palisades Nuclear Plant', unit: '1', operator: 'Holtec', lastOutageAnchor: '2021-05-20', cycleMonths: 18, predictedNextOutage: '2026-11-20', predictedOutageAfterNext: '2028-05-20' },
  { plant: 'Palo Verde Nuclear Generating Station', unit: '1', operator: 'Arizona Public Service', lastOutageAnchor: '2025-10-11', cycleMonths: 18, predictedNextOutage: '2027-04-11', predictedOutageAfterNext: '2028-10-11' },
  { plant: 'Palo Verde Nuclear Generating Station', unit: '2', operator: 'Arizona Public Service', lastOutageAnchor: '2025-05-10', cycleMonths: 18, predictedNextOutage: '2026-11-10', predictedOutageAfterNext: '2028-05-10' },
  { plant: 'Palo Verde Nuclear Generating Station', unit: '3', operator: 'Arizona Public Service', lastOutageAnchor: '2025-03-29', cycleMonths: 18, predictedNextOutage: '2026-09-29', predictedOutageAfterNext: '2028-03-29' },
  { plant: 'Perry Nuclear Power Plant', unit: '1', operator: 'Vistra Corporation', lastOutageAnchor: '2025-04-12', cycleMonths: 24, predictedNextOutage: '2027-04-12', predictedOutageAfterNext: '2029-04-12' },
  { plant: 'Point Beach Nuclear Plant', unit: '1', operator: 'NextEra Energy', lastOutageAnchor: '2025-02-15', cycleMonths: 18, predictedNextOutage: '2026-08-15', predictedOutageAfterNext: '2028-02-15' },
  { plant: 'Point Beach Nuclear Plant', unit: '2', operator: 'NextEra Energy', lastOutageAnchor: '2025-09-27', cycleMonths: 18, predictedNextOutage: '2027-03-27', predictedOutageAfterNext: '2028-09-27' },
  { plant: 'Prairie Island Nuclear Generating Plant', unit: '1', operator: 'Xcel Energy', lastOutageAnchor: '2025-04-05', cycleMonths: 18, predictedNextOutage: '2026-10-05', predictedOutageAfterNext: '2028-04-05' },
  { plant: 'Prairie Island Nuclear Generating Plant', unit: '2', operator: 'Xcel Energy', lastOutageAnchor: '2025-10-11', cycleMonths: 18, predictedNextOutage: '2027-04-11', predictedOutageAfterNext: '2028-10-11' },
  { plant: 'Quad Cities Nuclear Power Station', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-03-15', cycleMonths: 24, predictedNextOutage: '2027-03-15', predictedOutageAfterNext: '2029-03-15' },
  { plant: 'Quad Cities Nuclear Power Station', unit: '2', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-10-18', cycleMonths: 24, predictedNextOutage: '2027-10-18', predictedOutageAfterNext: '2029-10-18' },
  { plant: 'R. E. Ginna Nuclear Power Plant', unit: '1', operator: 'Constellation Nuclear', lastOutageAnchor: '2025-03-15', cycleMonths: 24, predictedNextOutage: '2027-03-15', predictedOutageAfterNext: '2029-03-15' },
  { plant: 'River Bend Station', unit: '1', operator: 'Entergy Operations', lastOutageAnchor: '2025-04-26', cycleMonths: 24, predictedNextOutage: '2027-04-26', predictedOutageAfterNext: '2029-04-26' },
  { plant: 'Robinson Nuclear Plant', unit: '2', operator: 'Duke Energy', lastOutageAnchor: '2025-04-26', cycleMonths: 18, predictedNextOutage: '2026-10-26', predictedOutageAfterNext: '2028-04-26' },
  { plant: 'Salem Nuclear Generating Station', unit: '1', operator: 'PSEG Nuclear', lastOutageAnchor: '2024-10-12', cycleMonths: 18, predictedNextOutage: '2026-04-12', predictedOutageAfterNext: '2027-10-12' },
  { plant: 'Salem Nuclear Generating Station', unit: '2', operator: 'PSEG Nuclear', lastOutageAnchor: '2025-03-15', cycleMonths: 18, predictedNextOutage: '2026-09-15', predictedOutageAfterNext: '2028-03-15' },
  { plant: 'Seabrook Station', unit: '1', operator: 'NextEra Energy', lastOutageAnchor: '2025-03-08', cycleMonths: 18, predictedNextOutage: '2026-09-08', predictedOutageAfterNext: '2028-03-08' },
  { plant: 'Sequoyah Nuclear Plant', unit: '1', operator: 'Tennessee Valley Authority', lastOutageAnchor: '2025-03-01', cycleMonths: 18, predictedNextOutage: '2026-09-01', predictedOutageAfterNext: '2028-03-01' },
  { plant: 'Sequoyah Nuclear Plant', unit: '2', operator: 'Tennessee Valley Authority', lastOutageAnchor: '2024-10-19', cycleMonths: 18, predictedNextOutage: '2026-04-19', predictedOutageAfterNext: '2027-10-19' },
  { plant: 'South Texas Project', unit: '1', operator: 'STP Nuclear Operating Company', lastOutageAnchor: '2025-03-29', cycleMonths: 18, predictedNextOutage: '2026-09-29', predictedOutageAfterNext: '2028-03-29' },
  { plant: 'South Texas Project', unit: '2', operator: 'STP Nuclear Operating Company', lastOutageAnchor: '2024-11-02', cycleMonths: 18, predictedNextOutage: '2026-05-02', predictedOutageAfterNext: '2027-11-02' },
  { plant: 'St. Lucie Nuclear Plant', unit: '1', operator: 'Florida Power & Light', lastOutageAnchor: '2025-10-4', cycleMonths: 18, predictedNextOutage: '2027-04-04', predictedOutageAfterNext: '2028-10-04' },
  { plant: 'St. Lucie Nuclear Plant', unit: '2', operator: 'Florida Power & Light', lastOutageAnchor: '2025-03-15', cycleMonths: 18, predictedNextOutage: '2026-09-15', predictedOutageAfterNext: '2028-03-15' },
  { plant: 'Surry Nuclear Power Plant', unit: '1', operator: 'Dominion Energy', lastOutageAnchor: '2025-03-01', cycleMonths: 18, predictedNextOutage: '2026-09-01', predictedOutageAfterNext: '2028-03-01' },
  { plant: 'Surry Nuclear Power Plant', unit: '2', operator: 'Dominion Energy', lastOutageAnchor: '2024-09-21', cycleMonths: 18, predictedNextOutage: '2026-03-21', predictedOutageAfterNext: '2027-09-21' },
  { plant: 'Susquehanna Steam Electric Station', unit: '1', operator: 'Talen Energy', lastOutageAnchor: '2024-11-16', cycleMonths: 24, predictedNextOutage: '2026-11-16', predictedOutageAfterNext: '2028-11-16' },
  { plant: 'Susquehanna Steam Electric Station', unit: '2', operator: 'Talen Energy', lastOutageAnchor: '2025-04-26', cycleMonths: 24, predictedNextOutage: '2027-04-26', predictedOutageAfterNext: '2029-04-26' },
  { plant: 'Turkey Point Nuclear Generating Station', unit: '3', operator: 'Florida Power & Light', lastOutageAnchor: '2025-04-05', cycleMonths: 18, predictedNextOutage: '2026-10-05', predictedOutageAfterNext: '2028-04-05' },
  { plant: 'Turkey Point Nuclear Generating Station', unit: '4', operator: 'Florida Power & Light', lastOutageAnchor: '2024-11-02', cycleMonths: 18, predictedNextOutage: '2026-05-02', predictedOutageAfterNext: '2027-11-02' },
  { plant: 'Vermont Yankee Nuclear Power Plant', unit: '1', operator: 'NorthStar', lastOutageAnchor: '2014-12-29', cycleMonths: 18, predictedNextOutage: '2026-06-29', predictedOutageAfterNext: '2027-12-29' },
  { plant: 'Vogtle Electric Generating Plant', unit: '1', operator: 'Southern Nuclear', lastOutageAnchor: '2025-03-08', cycleMonths: 18, predictedNextOutage: '2026-09-08', predictedOutageAfterNext: '2028-03-08' },
  { plant: 'Vogtle Electric Generating Plant', unit: '2', operator: 'Southern Nuclear', lastOutageAnchor: '2025-10-11', cycleMonths: 18, predictedNextOutage: '2027-04-11', predictedOutageAfterNext: '2028-10-11' },
  { plant: 'Vogtle Electric Generating Plant', unit: '3', operator: 'Southern Nuclear', lastOutageAnchor: '2026-03-28', cycleMonths: 18, predictedNextOutage: '2027-09-28', predictedOutageAfterNext: '2029-03-28' },
  { plant: 'Vogtle Electric Generating Plant', unit: '4', operator: 'Southern Nuclear', lastOutageAnchor: '2026-02-14', cycleMonths: 18, predictedNextOutage: '2027-08-14', predictedOutageAfterNext: '2029-02-14' },
  { plant: 'Waterford Steam Electric Station', unit: '3', operator: 'Entergy Operations', lastOutageAnchor: '2025-03-08', cycleMonths: 18, predictedNextOutage: '2026-09-08', predictedOutageAfterNext: '2028-03-08' },
  { plant: 'Watts Bar Nuclear Plant', unit: '1', operator: 'Tennessee Valley Authority', lastOutageAnchor: '2025-10-25', cycleMonths: 18, predictedNextOutage: '2027-04-25', predictedOutageAfterNext: '2028-10-25' },
  { plant: 'Watts Bar Nuclear Plant', unit: '2', operator: 'Tennessee Valley Authority', lastOutageAnchor: '2025-03-15', cycleMonths: 18, predictedNextOutage: '2026-09-15', predictedOutageAfterNext: '2028-03-15' },
  { plant: 'Wolf Creek Generating Station', unit: '1', operator: 'Wolf Creek Nuclear Operating Corporation', lastOutageAnchor: '2025-03-29', cycleMonths: 18, predictedNextOutage: '2026-09-29', predictedOutageAfterNext: '2028-03-29' },
];

const referenceDate = new Date('2026-03-30');
const monthShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CardShell = ({ children, className = '' }) => (
  <div className={`rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/10 backdrop-blur ${className}`}>
    {children}
  </div>
);

const StatCard = ({ icon, label, value, subtext }) => (
  <CardShell>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-white/60">{label}</div>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
          {icon}
        </div>
      </div>
      <div className="mt-4 text-3xl font-semibold text-white">{value}</div>
      <div className="mt-2 text-sm text-white/55">{subtext}</div>
    </CardContent>
  </CardShell>
);

function formatDate(value) {
  const date = new Date(`${value}T00:00:00`);
  return `${monthShort[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function daysUntil(value) {
  const target = new Date(`${value}T00:00:00`);
  return Math.round((target - referenceDate) / (1000 * 60 * 60 * 24));
}

function monthKey(value) {
  const date = new Date(`${value}T00:00:00`);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

export default function NuclearMaintenanceHomepage() {
  const [search, setSearch] = useState('');
  const [cycleFilter, setCycleFilter] = useState('all');
  const [sortMode, setSortMode] = useState('soonest');

  const filteredData = useMemo(() => {
    const normalized = search.trim().toLowerCase();

    let rows = outageData.filter((item) => {
      const matchesSearch = !normalized || [item.plant, item.operator, item.unit].join(' ').toLowerCase().includes(normalized);
      const matchesCycle = cycleFilter === 'all' || String(item.cycleMonths) === cycleFilter;
      return matchesSearch && matchesCycle;
    });

    rows = [...rows].sort((a, b) => {
      if (sortMode === 'soonest') return daysUntil(a.predictedNextOutage) - daysUntil(b.predictedNextOutage);
      if (sortMode === 'latest') return daysUntil(b.predictedNextOutage) - daysUntil(a.predictedNextOutage);
      return a.plant.localeCompare(b.plant);
    });

    return rows;
  }, [search, cycleFilter, sortMode]);

  const totalUnits = outageData.length;
  const uniquePlants = new Set(outageData.map((item) => item.plant)).size;
  const uniqueOperators = new Set(outageData.map((item) => item.operator)).size;
  const next12Months = outageData.filter((item) => {
    const days = daysUntil(item.predictedNextOutage);
    return days >= 0 && days <= 365;
  }).length;

  const upcoming = [...outageData]
    .sort((a, b) => daysUntil(a.predictedNextOutage) - daysUntil(b.predictedNextOutage))
    .slice(0, 8);

  const monthlyBuckets = useMemo(() => {
    const counts = {};
    outageData.forEach((item) => {
      const key = monthKey(item.predictedNextOutage);
      counts[key] = (counts[key] || 0) + 1;
    });

    return Object.entries(counts)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .slice(0, 14)
      .map(([key, count]) => {
        const [year, month] = key.split('-');
        return {
          key,
          label: `${monthShort[Number(month) - 1]} ${year}`,
          count,
        };
      });
  }, []);

  const maxBucket = Math.max(...monthlyBuckets.map((item) => item.count), 1);

  return (
    <div className="min-h-screen bg-[#08111f] text-white" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-[30rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-4rem] h-[20rem] w-[20rem] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#08111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">Maintenance235</div>
            <div className="mt-1 text-2xl font-semibold">Refueling outage dashboard</div>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <Button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10">
              Export view
            </Button>
            <Button className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 hover:bg-cyan-200">
              Add next dataset
            </Button>
          </div>
        </div>
      </header>

      <main className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <CardShell className="overflow-hidden">
            <CardContent className="p-8 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
                <Activity className="h-4 w-4" />
                First live dataset loaded
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                See which nuclear units are likely approaching their next refueling outage.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">
                This dashboard turns your outage anchor dates and cycle assumptions into a clean operating view for vendors, planners, and future maintenance intelligence workflows.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/55">Reference date</div>
                  <div className="mt-2 text-xl font-semibold">Mar 30, 2026</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/55">Model basis</div>
                  <div className="mt-2 text-xl font-semibold">Anchor date + cycle months</div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/55">Current dataset</div>
                  <div className="mt-2 text-xl font-semibold">Refueling outage dates</div>
                </div>
              </div>
            </CardContent>
          </CardShell>

          <CardShell>
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Soonest predicted outages</div>
                  <div className="mt-2 text-2xl font-semibold">Closest upcoming units</div>
                </div>
                <CalendarClock className="h-6 w-6 text-cyan-300" />
              </div>
              <div className="mt-6 space-y-4">
                {upcoming.slice(0, 5).map((item) => {
                  const days = daysUntil(item.predictedNextOutage);
                  return (
                    <div key={`${item.plant}-${item.unit}`} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-base font-medium text-white">{item.plant} Unit {item.unit}</div>
                          <div className="mt-1 text-sm text-white/58">{item.operator}</div>
                        </div>
                        <div className="rounded-2xl bg-cyan-300/10 px-3 py-2 text-sm text-cyan-200">
                          {days} days
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm text-white/70">
                        <Clock3 className="h-4 w-4" />
                        {formatDate(item.predictedNextOutage)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </CardShell>
        </motion.section>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatCard icon={<Factory className="h-5 w-5" />} label="Units tracked" value={totalUnits} subtext="Plant-unit records in the current outage dataset" />
          <StatCard icon={<Building2 className="h-5 w-5" />} label="Plants represented" value={uniquePlants} subtext="Unique plant names across the loaded rows" />
          <StatCard icon={<ArrowUpRight className="h-5 w-5" />} label="Operators represented" value={uniqueOperators} subtext="Distinct operators currently visible in the dataset" />
          <StatCard icon={<CalendarClock className="h-5 w-5" />} label="Next 12 months" value={next12Months} subtext="Predicted outages falling within the next year" />
        </section>

        <section className="mt-8 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <CardShell>
            <CardContent className="p-7 lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Filtered view</div>
                  <h2 className="mt-2 text-2xl font-semibold">Unit-level outage table</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/68">
                    <Search className="h-4 w-4" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search plant, operator, or unit"
                      className="w-56 bg-transparent outline-none placeholder:text-white/35"
                    />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    <Filter className="h-4 w-4 text-white/55" />
                    <select
                      value={cycleFilter}
                      onChange={(e) => setCycleFilter(e.target.value)}
                      className="bg-transparent outline-none"
                    >
                      <option value="all" className="text-slate-900">All cycles</option>
                      <option value="18" className="text-slate-900">18 months</option>
                      <option value="24" className="text-slate-900">24 months</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                    <SlidersHorizontal className="h-4 w-4 text-white/55" />
                    <select
                      value={sortMode}
                      onChange={(e) => setSortMode(e.target.value)}
                      className="bg-transparent outline-none"
                    >
                      <option value="soonest" className="text-slate-900">Soonest first</option>
                      <option value="latest" className="text-slate-900">Latest first</option>
                      <option value="plant" className="text-slate-900">Plant name</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#091527]">
                <div className="grid grid-cols-[2.2fr_0.55fr_1.5fr_1fr_1fr] border-b border-white/10 px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/45">
                  <div>Plant</div>
                  <div>Unit</div>
                  <div>Operator</div>
                  <div>Next outage</div>
                  <div>Cycle</div>
                </div>
                <div className="max-h-[34rem] overflow-y-auto">
                  {filteredData.map((item) => {
                    const days = daysUntil(item.predictedNextOutage);
                    return (
                      <div
                        key={`${item.plant}-${item.unit}`}
                        className="grid grid-cols-[2.2fr_0.55fr_1.5fr_1fr_1fr] items-center border-b border-white/5 px-5 py-4 text-sm text-white/82 transition hover:bg-white/5"
                      >
                        <div>
                          <div className="font-medium text-white">{item.plant}</div>
                          <div className="mt-1 text-xs text-white/45">Anchor: {formatDate(item.lastOutageAnchor)}</div>
                        </div>
                        <div>{item.unit}</div>
                        <div className="text-white/60">{item.operator}</div>
                        <div>
                          <div>{formatDate(item.predictedNextOutage)}</div>
                          <div className="mt-1 text-xs text-cyan-300">{days} days</div>
                        </div>
                        <div>{item.cycleMonths} mo</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </CardShell>

          <div className="space-y-8">
            <CardShell>
              <CardContent className="p-7">
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">Monthly pressure</div>
                <h2 className="mt-2 text-2xl font-semibold">Predicted outage cadence</h2>
                <div className="mt-6 space-y-4">
                  {monthlyBuckets.map((bucket) => (
                    <div key={bucket.key}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-white/70">{bucket.label}</span>
                        <span className="font-medium text-white">{bucket.count}</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/8">
                        <div
                          className="h-3 rounded-full bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300"
                          style={{ width: `${(bucket.count / maxBucket) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </CardShell>

            <CardShell>
              <CardContent className="p-7">
                <div className="text-sm uppercase tracking-[0.24em] text-cyan-300/80">What to build next</div>
                <div className="mt-4 space-y-4">
                  {[
                    'Plant detail pages with outage history and component work assumptions',
                    'Interactive outage timeline with horizontal scroll and click-through drilldowns',
                    'Vendor opportunity scoring based on upcoming outage windows',
                    'Second dataset layer for maintenance procedures and component-level work packages',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/78">
                      <ChevronRight className="mt-1 h-4 w-4 flex-none text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </CardShell>
          </div>
        </section>
      </main>
    </div>
  );
}
