'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faDollarSign, faGraduationCap, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';


export function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-800 text-white fixed top-0 left-0 p-4">
      <div className="space-y-4">
        <div className="group">
          <button className="w-full text-left p-2 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faFolder} className="h-5 w-5" />
              <span>Folgas</span>
            </div>
          </button>
        </div>

        <div className="group">
          <button className="w-full text-left p-2 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5" />
              <span>Pecúnia</span>
            </div>
          </button>
        </div>

        <Link
          href="/capacitacoes"
          className="w-full block text-left p-2 rounded-md hover:bg-gray-700 transition duration-200"
        >
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faGraduationCap} className="h-5 w-5" />
            <span>Capacitações</span>
          </div>
        </Link>

        <div className="group">
          <button className="w-full text-left p-2 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faChartBar} className="h-5 w-5" />
              <span>Relatórios</span>
            </div>
          </button>
        </div>

        <div className="group">
          <button className="w-full text-left p-2 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faCog} className="h-5 w-5" />
              <span>Configurações</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
