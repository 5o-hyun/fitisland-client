import BaseLayout from '@components/Layouts/BaseLayout';
import Navigation from '@components/Navigation';

type Props = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: Props) {
  return (
    <BaseLayout>
      {children}
      <Navigation />
    </BaseLayout>
  );
}
