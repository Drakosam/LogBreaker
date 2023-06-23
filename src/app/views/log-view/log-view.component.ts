import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef, Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {LogItem} from "../../data-clasess/log-item";

@Component({
  selector: 'app-log-view',
  templateUrl: './log-view.component.html',
  styleUrls: ['./log-view.component.scss']
})
export class LogViewComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('LogLineContainer') logView: ElementRef | undefined;
  @Input() public logItem: LogItem | undefined
  private height_content = 0
  public current_line_num: number = 0;
  public line_txt: any[] = []
  private inner_loop: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private inner_loop$ = this.inner_loop.asObservable();
  private sub_inner_loop: Subscription | undefined;
  private log_lines_size = 0;

  constructor(private appRef: ChangeDetectorRef,) {
  }

  ngOnInit(): void {

    this.log_lines_size = this.logItem ? this.logItem.getSize() : 0;
    this.sub_inner_loop = this.inner_loop$.subscribe((data: number) => {
      if (data !== this.height_content) {
        this.height_content = data;
        this.updateLineNum();
        this.appRef.detectChanges()
      }
    });
  }

  ngAfterViewInit(): void {
    const temp_height = this.logView?.nativeElement.clientHeight;
    this.inner_loop.next(temp_height);
  }

  ngOnDestroy(): void {
    if (this.sub_inner_loop) {
      this.sub_inner_loop.unsubscribe();
    }
  }

  updateLineNum() {
    this.line_txt = [];
    for (let i: number = 0; i < Math.floor(this.height_content / 25); i++) {
      this.line_txt.push(
        { "no": i + this.current_line_num,
          "txt":this.logItem ? this.logItem.getLine(i + this.current_line_num) : 'x'}
      );
    }
  }

  wheelMove(event: any) {
    if (event.deltaY > 0) {
      this.current_line_num++;
      if (this.current_line_num >= this.log_lines_size) {
        this.current_line_num = this.log_lines_size - 1;
      }
    } else {
      this.current_line_num--;
      if (this.current_line_num < 0) {
        this.current_line_num = 0;
      }
    }
    this.updateLineNum();
  }

}
