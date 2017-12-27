import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { log } from 'util';


@Directive({
  selector: '[appFormcheck]'
})
export class FormcheckDirective {
  constructor(private el: ElementRef) {
  }

  // Attribute Observer Init  
  observer = new MutationObserver(mutations => {
    mutations.forEach(function (mutation) {
      this.catchAttrChanges(mutation);
    }.bind(this));
  });

  // All checkes Points we need to check 
  // form-control ng-invalid ng-dirty ng-touched
  checkPointArray = [{ attr: 'class', newValue: 'ng-invalid', callbackChange: 'FunName' }];

  // this function check the desired new value if it exist the function will fire callbackChange function 
  catchAttrChanges(mutation) {
    for (let checkPoint of this.checkPointArray) {
      if (mutation.attributeName == checkPoint.attr) {
        if (mutation.target.attributes[mutation.attributeName].value.search(checkPoint.newValue) > 0) this[checkPoint.callbackChange]();
      }
    }
  }

  // Lifecycle Hooks 
  ngAfterViewInit() {
    var config = { attributes: true, childList: true, characterData: true };
    this.observer.observe(this.el.nativeElement, config);
  }



  // all callbackChange Functions 

  FunName() {
    this.el.nativeElement.style.border = '4px solid green';
  }

}
