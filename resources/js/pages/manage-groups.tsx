import { Head } from '@inertiajs/react';

export default function ManageGroups() {
    return (
        <>
            <Head title="Manage Groups" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="rounded-xl border border-sidebar-border/70 bg-background p-6 dark:border-sidebar-border">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Manage Groups
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Create, update, and organize your groups from this page.
                    </p>
                </div>
            </div>
        </>
    );
}

ManageGroups.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: '/dashboard',
        },
        {
            title: 'Manage Groups',
            href: '/manage-groups',
        },
    ],
};
