import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/services/util';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'ik-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input() menus: OpcaoMenu[];

    @Input() menusGroup: MenuGroup[];

    constructor(
        private tools: ToolsService,
    ) { }

    ngOnInit() {
    }

    goTo(url: string) {
        this.tools.goTo(url);
    }
}

export class MenuGroup {
    constructor(
        public titulo: string,
        public img: string,
        public button: string,
        public options: OpcaoMenu[]
    ) { }
}

export class OpcaoMenu {
    constructor(
        public titulo: string,
        public img: string,
        public button: string,
        public url: string,
        public ativo: boolean
    ) { }
}

export class ItemMenu {
    constructor(
        public titulo: string,
        public url: string,
        public img: string) { }
}
