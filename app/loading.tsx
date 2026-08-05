import { Logo } from '@/components/ui/Logo';
import { Spinner } from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className="grid min-h-dvh place-items-center px-4">
      <div className="flex flex-col items-center gap-5">
        <Logo variant="icon" size={44} className="animate-pulse" />
        <Spinner size={30} className="text-brand-cyan" />
      </div>
    </div>
  );
}
