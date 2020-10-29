import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';

import { EMPTY, Observable, of } from 'rxjs';
import { map, expand } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private compressedImages = [];

  constructor( private storage: AngularFireStorage ) { }

  processImage(data: FileList): Observable<any> {
    return this.recursiveCompress(data[0], 0, data).pipe(
      expand(res => {
        return res.index > res.array.length - 1
          ? EMPTY
          : this.recursiveCompress(data[res.index], res.index, data);
      }),
    );
  }

  processImg(data: any): Observable<any> {
    return this.recursiveCompress(data, 0, []).pipe(
      expand(res => {
        return res.index > res.array.length - 1
          ? EMPTY
          : this.recursiveCompress(data[res.index], res.index, []);
      }),
    );
  }

  private recursiveCompress = (image: File, index, array) => {
    return this.compress(image).pipe(
      map(response => {
        this.compressedImages.push(response);
        return {
          data: response,
          index: index + 1,
          array,
        };
      }),
    );
  }

  private compress(file: File): Observable<any> {
    const width = 600; // For scaling relative to width
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // tslint:disable-next-line: deprecation
    return Observable.create(observer => {
      reader.onload = ev => {
        const img = new Image();
        img.src = (ev.target as any).result;
        (img.onload = () => {
          const elem = document.createElement('canvas'); // Use Angular's Renderer2 method
          const scaleFactor = width / img.width;
          elem.width = width;
          elem.height = img.height * scaleFactor;
          const ctx = elem.getContext('2d') as CanvasRenderingContext2D;
          ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
          ctx.canvas.toBlob(
            blob => {
              observer.next(
                new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                }),
              );
            },
            'image/jpeg',
            1,
          );
        }),
          (reader.onerror = error => observer.error(error));
      };
    });
  }

  uploadImg(path: string, file: File, id: string) {
    const filePath = `${path}/${id}`;
    const storageRef = this.storage.ref(filePath);
    return this.storage.upload(filePath, file);
  }
}
