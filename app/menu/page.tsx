import { Metadata, ResolvingMetadata } from 'next';

import { MENU_ROUTE } from '@/constants';

import { getMetadataTitle } from '@/lib/metadata/metadata-utils';
import { openGraphImage } from '@/lib/metadata/open-graph-image';

import Menu from '@/components/menu';

export async function generateMetadata(
  _arg: Record<string, never>,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentOpengraphUrl = (await parent).openGraph?.url;

  return {
    title: getMetadataTitle('Menu'),
    openGraph: {
      title: getMetadataTitle('Menu'),
      url: `${parentOpengraphUrl}${MENU_ROUTE}`,
      ...openGraphImage,
    },
  };
}

const MenuPage = () => {
  return <Menu />;
};

export default MenuPage;
