import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Notes AI',
    description:  'Notes AI is a powerful and versatile platform designed to help you effortlessly summarize and take notes on a wide range of content, including lecture videos, PDF documents, and more.',
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: 'device-width' },
    openGraph: {
        type: 'website',
        title: 'Notes AI',
        url: 'to be made',
        description: 'Notes AI is a powerful and versatile platform designed to help you effortlessly summarize and take notes on a wide range of content, including lecture videos, PDF documents, and more.',
        images: ['none'],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
