#!/usr/bin/env bash

input="$1"

# echo "$input"

if [[ "$input" = 'invpg' ]]
then
  vi ./app/dashboard/invoices/page.tsx
elif [[ $input = 'actlb' ]]
then
  vi ./app/lib/actions.ts
elif [[ $input = 'inved' ]]
then
  vi './app/dashboard/invoices/[id]/edit/page.tsx'
elif [[ $input = 'tblui' ]]
then
  vi ./app/ui/invoices/table.tsx
elif [[ $input = 'btnui' ]]
then
  vi ./app/ui/invoices/buttons.tsx
elif [[ $input = 'edtfm' ]]
then
  vi ./app/ui/invoices/edit-form.tsx
elif [[ $input = 'inver' ]]
then
  vi ./app/dashboard/invoices/error.tsx
elif [[ $input = 'crtfm' ]]
then
  vi ./app/ui/invoices/create-form.tsx
elif [[ $input = 'lgnpg' ]]
then
  vi ./app/login/page.tsx
elif [[ $input = 'lgnfm' ]]
then
  vi ./app/ui/login-form.tsx
fi
