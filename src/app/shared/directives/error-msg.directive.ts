import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';


  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string) {
    const color = valor;
    this._color = color;
    this.setColor();
  }
  //@Input() mensaje?: string;

  @Input() set mensaje( valor: string) {

    const mensaje = valor;
    this._mensaje = mensaje;
    this.setMensaje();


  }


  @Input() set valido( valor: boolean) {

    if ( valor ) {

      //this.htmlElement.nativeElement.remove();

      this.htmlElement.nativeElement.classList.add('hidden');

    } else {

      this.htmlElement.nativeElement.classList.remove('hidden');


    }


  }

  constructor( private el: ElementRef<HTMLElement> ) {

    console.log('Constructor directive');
    console.log(el);

    this.htmlElement = el;

  }
  ngOnChanges(changes: SimpleChanges): void {

   /*  if ( changes.mensaje ) {
      const mensaje = changes.mensaje?.currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if ( changes.color ) {

      const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;

    } */


  }
  ngOnInit(): void {
    console.log('ngOnInit directiva');
    this.setColor();
    this.setMensaje();
    this.setEstilo();

  }

  setEstilo(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {

    this.htmlElement.nativeElement.style.color = this._color;

  }

  setMensaje(): void {

    this.htmlElement.nativeElement.innerText = this._mensaje;


  }

}
