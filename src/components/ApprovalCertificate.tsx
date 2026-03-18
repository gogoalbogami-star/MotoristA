import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ApprovalCertificateProps {
  nomeCompleto: string;
  cpf: string;
  onClose: () => void;
}

export default function ApprovalCertificate({ nomeCompleto, cpf, onClose }: ApprovalCertificateProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = '/certificate-template.png';

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const primeiroSegundoNome = nomeCompleto.split(' ').slice(0, 2).join(' ');

      ctx.fillStyle = '#1e3a8a';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';

      const centerX = canvas.width / 2;
      const nomeY = 285;
      const cpfY = 340;

      ctx.fillText(primeiroSegundoNome, centerX, nomeY);

      ctx.font = '36px Arial';
      ctx.fillText(cpf, centerX, cpfY);
    };
  }, [nomeCompleto, cpf]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = `aprovacao-${cpf}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">Certificado de Aprovação</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <canvas
            ref={canvasRef}
            className="w-full h-auto border border-gray-200 rounded"
          />

          <div className="mt-6 flex gap-3">
            <button
              onClick={handleDownload}
              className="flex-1 bg-[#1e3a8a] hover:bg-[#1e40af] text-white font-bold py-3 px-6 rounded transition"
            >
              Baixar Imagem
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-50 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
