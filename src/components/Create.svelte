<script>
  import { onDestroy } from 'svelte'

  import { postDiary } from '../helpers/api'
  import { userId } from '../store'

  let rate = 5
  let body = ''
  let uid = null

  const unsubscribe = userId.subscribe((id) => {
    uid = id
  })
  onDestroy(() => unsubscribe)

  const onsubmit = async () => {
    const result = await postDiary(uid, rate, body)
    if (!result) alert('日記の追加に失敗しました')
    else {
      document.location.href = '/'
    }
  }
</script>

<div class="m-4 max-w-3xl mx-auto">
  <h1 class="text-3xl font-bold">日記作成</h1>
  <form on:submit|preventDefault={onsubmit}>
    <div class="m-4 p-6 rounded-xl bg-slate-100 shadow-md">
      <div class="flex flex-col items-start justify-center gap-1">
        <label for="rate">気分は{rate}点です</label>
        <input
          class="w-full appearance-none bg-primary rounded-full h-2 cursor-pointer"
          id="rate"
          type="range"
          bind:value={rate}
          min="1"
          max="10"
        />
      </div>
      <div class="mt-6 flex flex-col items-start justify-center gap-1">
        <label for="body">本文</label>
        <textarea
          class="p-2 rounded-md w-full"
          placeholder="日記の本文を入力"
          id="body"
          bind:value={body}
          rows="4"
        />
      </div>
      <button
        class="mt-6 px-8 py-2 border border-primary bg-primary rounded-md hover:bg-primary/50 disabled:bg-slate-200 disabled:cursor-not-allowed disabled:text-white"
        disabled={!body}
        type="submit">保存</button
      >
    </div>
  </form>
</div>
