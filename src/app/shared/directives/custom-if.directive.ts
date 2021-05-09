import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set customIf( condicion: boolean){

    if ( condicion ) {

      this.viewContaier.createEmbeddedView( this.templaeteRef );

    } else {

      this.viewContaier.clear();
    }

  }

  constructor(

    private templaeteRef: TemplateRef<HTMLElement>,
    private viewContaier: ViewContainerRef

  ) {
    console.log('Custom if')
  }

}
