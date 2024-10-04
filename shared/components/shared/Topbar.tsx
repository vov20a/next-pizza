import { cn } from '@/shared/lib/utils';
import React from 'react'
import { Container } from './Container';
import { Categories } from './Categories';
import { SortPopup } from './SortPopup';
import { Category } from '@prisma/client';

interface Props {
    categories: Category[]
    className?: string;
}

export const Topbar: React.FC<Props> = ({ categories, className }) => {
    return (
        <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
            <Container className="flex items-center justify-between ">
                <Categories items={categories} />
                <SortPopup />
            </Container>
        </div>
    )
}