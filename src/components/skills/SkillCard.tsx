import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export function SkillCard({ icon, title, items }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <div className="flex items-center mb-4 text-indigo-600">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-gray-600">{item}</li>
        ))}
      </ul>
    </div>
  );
}