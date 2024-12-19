import BaseLayout from '@components/Layouts/BaseLayout';

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return <BaseLayout>{children}</BaseLayout>;
}
