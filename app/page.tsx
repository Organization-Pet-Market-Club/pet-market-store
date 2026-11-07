import { Suspense } from 'react';

// Micro-componente asíncrono para el fetch
async function BackendStatus() {
  let isConnected = false;
  
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users`, { method: 'HEAD', cache: 'no-store' });
    isConnected = response.ok || response.status === 401 || response.status === 403; 
  } catch (e) {
    isConnected = false;
    console.error("Fallo la conexión a Strapi:", e);
  }

  return (
    <div className={`p-4 rounded-lg font-semibold ${isConnected ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      Estado del Backend: {isConnected ? '🟢 Strapi Conectado' : '🔴 Strapi Desconectado'}
    </div>
  );
}

// Componente principal síncrono y renderiza al instante
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-gray-900">Pet Market Club</h1>
        
        {/* Suspense envuelve la parte asíncrona. Next.js muestra el fallback mientras espera */}
        <Suspense fallback={<div className="p-4 rounded-lg font-semibold bg-gray-200 text-gray-600">Verificando conexión a Strapi...</div>}>
          <BackendStatus />
        </Suspense>

        <p className="text-gray-600 text-center max-w-md">
          El frontend de Next.js ya está configurado para consumir los datos de Strapi.
        </p>
      </div>
    </main>
  );
}