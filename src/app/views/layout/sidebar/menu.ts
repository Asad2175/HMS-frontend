import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Pages',
    isTitle: true
  },
  // {
  //   label: 'Forms',
  //   icon: 'file-text',
  //   subItems: [
  //     {
  //       label: 'Basic elements',
  //       link: '/form-elements/basic-elements'
  //     },
  //     {
  //       label: 'Advanced elements',
  //       subItems: [
  //         {
  //           label: 'Form validation',
  //           link: '/advanced-form-elements/form-validation'
  //         },
  //         {
  //           label: 'Input mask',
  //           link: '/advanced-form-elements/input-mask'
  //         },
  //         {
  //           label: 'Ng-select',
  //           link: '/advanced-form-elements/ng-select'
  //         },
  //         {
  //           label: 'Ngx-chips',
  //           link: '/advanced-form-elements/ngx-chips'
  //         },
  //         {
  //           label: 'Ngx-color-picker',
  //           link: '/advanced-form-elements/ngx-color-picker'
  //         },
  //         {
  //           label: 'Ngx-dropzone',
  //           link: '/advanced-form-elements/ngx-dropzone-wrapper'
  //         },
  //       ]
  //     },
  //     {
  //       label: 'Editors',
  //       link: '/form-elements/editors'
  //     },
  //     {
  //       label: 'Wizard',
  //       link: '/form-elements/wizard'
  //     },
  //   ]
  // },
  {
    label: 'Configurations',
    icon: 'smile',
    subItems: [
      {
        label: 'Floors',
        link: '/configurations/floors',
      }
    ]
  },
  {
    label: 'Rentee',
    icon: 'smile',
    subItems: [
      {
        label: 'Add',
        link: '/rentee/add',
      }
    ]
  }
];
