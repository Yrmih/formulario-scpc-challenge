
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faDollarSign, faClipboard, faChartBar, faCog } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-900 text-white fixed top-0 left-0 p-6"> {/* Alterei a cor de fundo para bg-gray-900 */}
      <div className="space-y-8">
        <h2 className="text-lg font-semibold mb-6">Área do Servidor</h2> {/* Título "Área do Servidor" */}


        <div className="group">
          <button className="w-full text-left p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faFolder} className="h-5 w-5" />
              <span>Folgas</span>
            </div>
          </button>
        </div>

        <div className="group">
          <button className="w-full text-left p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faDollarSign} className="h-5 w-5" />
              <span>Pecúnia</span>
            </div>
          </button>
        </div>

        <div className="group">
          <button className="w-full text-left p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faClipboard} className="h-5 w-5" />
              <span>Solicitações</span>
            </div>
          </button>
        </div>

        <div className="group">
          <button className="w-full text-left p-3 rounded-md hover:bg-gray-700 transition duration-200">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faChartBar} className="h-5 w-5" />
              <span>Relatórios</span>
            </div>
          </button>
        </div>

        <div className="group">
          <button className="w-full text-left p-3 rounded-md hover:bg-gray-700 transition duration-200">
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
