# Chdt

queue -> очередь

while(queue.hasTasks()) {
  for (let task of queue.next()) {
    task();
  }
}

task - синхронные и асинхронные.
асинхронные:
- взаимодействие с DOM.
- события в DOM(click, нажатия на клавишу, скроллинг и т.д.).
- таймеры.
- сетевые запросы(HTTP, так и Websocket).
- promises

Позволяют нам немного управлять очередью.
Микротаска: промисы. Это то, что мы можем подсунуть в тот же цикл.
Макротаска: всегда на следующем цикле.

Мы хотим попрофилировать все асинхронные задачи.
NodeJS мир, там есть такая возможность async_hooks.

fetch - для получения данных -> подменяем fetch, где оставляем
работу fetch как есть + добавляем какое-то профилирование.
