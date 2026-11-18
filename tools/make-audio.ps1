# 영어 녹음 만들기: tools\audio-texts.txt 의 줄마다 컴퓨터의 영어 목소리(Zira)로 녹음해
# audio\ 폴더에 wav 파일을 만들고, 목록 audio\index.js 를 새로 써요.
# 새 단원을 넣을 땐 단어·개념 예문을 audio-texts.txt 에 더하고 이 파일을 다시 실행하면 돼요.
#   pwsh -File tools\make-audio.ps1
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Speech

$root = Split-Path -Parent $PSScriptRoot
$outDir = Join-Path $root "audio"
New-Item -ItemType Directory -Force $outDir | Out-Null

# common.js 의 audioKey() 와 똑같이 다듬어요
function Get-Key([string]$t) {
  $k = $t.ToLower() -replace "[^a-z0-9' ]+", " "
  return ($k -replace "\s+", " ").Trim()
}

$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice("Microsoft Zira Desktop")
$synth.Rate = -1
$fmt = New-Object System.Speech.AudioFormat.SpeechAudioFormatInfo(22050, [System.Speech.AudioFormat.AudioBitsPerSample]::Sixteen, [System.Speech.AudioFormat.AudioChannel]::Mono)

$map = [ordered]@{}
Get-Content (Join-Path $PSScriptRoot "audio-texts.txt") -Encoding UTF8 | ForEach-Object {
  $text = $_.Trim()
  if (-not $text) { return }
  $key = Get-Key $text
  if ($map.Contains($key)) { return }
  $file = (($key -replace "'", "") -replace "[^a-z0-9]+", "-").Trim("-")
  if ($file.Length -gt 60) { $file = $file.Substring(0, 60).Trim("-") }
  $file = "$file.wav"
  $synth.SetOutputToWaveFile((Join-Path $outDir $file), $fmt)
  $synth.Speak($text)
  $synth.SetOutputToNull()
  $map[$key] = $file
}
$synth.Dispose()

$lines = $map.Keys | ForEach-Object { '  "' + ($_ -replace '"', '\"') + '": "' + $map[$_] + '"' }
$js = "// make-audio.ps1 이 만든 녹음 목록이에요 (손으로 고치지 마세요)`nwindow.AUDIO_FILES = {`n" + ($lines -join ",`n") + "`n};`n"
[System.IO.File]::WriteAllText((Join-Path $outDir "index.js"), $js, (New-Object System.Text.UTF8Encoding $false))
"녹음 $($map.Count)개를 만들었어요."
