'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faDollarSign, faGraduationCap, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Link from 'next/link';  // Link do Next.js
import { usePathname } from 'next/navigation';  // Hook para pegar o pathname
import { cn } from '@/lib/utils';  // Função cn para manipulação de classes

export default function Sidebar() {
  console.log('teste!!!')
  const [collapsed, setCollapsed] = useState(false);  // Estado para colapsar a sidebar
  const pathname = usePathname();  // Pega o caminho da URL atual

  // Links do menu
  const links = [
    { name: 'Folgas', href: '/', icon: faFolder },
    { name: 'Pecúnia', href: '/', icon: faDollarSign },
    { name: 'Capacitações', href: '/capacitacoes', icon: faGraduationCap },
    { name: 'Relatórios', href: '/relatorios', icon: faChartBar },
    { name: 'Configurações', href: '/configuracoes', icon: faCog },
  ];

  return (
    <aside
      className={cn(
        'h-screen bg-gray-800 text-white fixed top-0 left-0 p-4 transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className='p-4 flex justify-between items-center'>
        {!collapsed && <span className="text-lg font-bold">Menu</span>}
        <button onClick={() => setCollapsed(!collapsed)} className="text-sm">
          {collapsed ? '=>' : '<='}
        </button>
      </div>

      <div className='space-y-4'>
        {links.map((link) => (
          <div key={`${link.href}-${link.name}`} className=''>
            <Link
              href={link.href}
              className={cn(
                'w-full block text-left p-2 rounded-md hover:bg-gray-700 transition duration-200',
                pathname === link.href ? 'bg-gray-700' : ''
              )}
            >
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
                {!collapsed && <span>{link.name}</span>}
                {collapsed && <span>{link.name[0]}</span>}  {/* Exibe a primeira letra quando colapsado */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
