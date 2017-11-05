import { ModuleWithProviders } from '@angular/core';

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}