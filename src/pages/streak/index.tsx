import { T } from '../../components'
import Border from '../../components/border'
import styles from './Streak.module.css'

const getColor = (count: number): string => {
  if (count === 0) return 'var(--section-bg)'
  if (count <= 2) return '#1a3d00'
  if (count <= 5) return '#2d6a00'
  if (count <= 8) return '#5a9400'
  return '#AFEE00'
}

const generateContributions = () => {
  const weeks: { count: number; date: Date }[][] = []
  const today = new Date()

  for (let w = 51; w >= 0; w--) {
    const week: { count: number; date: Date }[] = []
    for (let d = 0; d < 7; d++) {
      const daysAgo = w * 7 + (6 - d)
      const date = new Date(today)
      date.setDate(today.getDate() - daysAgo)
      const seed = (w * 13 + d * 7 + 11) % 19
      const count = seed < 6 ? 0 : seed < 10 ? seed - 5 : seed < 15 ? seed - 8 : 10
      week.push({ count, date })
    }
    weeks.push(week)
  }
  return weeks
}

const contributions = generateContributions()

const recentActivity = [
  { time: '2H_AGO',  action: 'PUSHED 3 COMMITS TO NEURAL_DASHBOARD', branch: 'feat/realtime-sync', color: '#AFEE00' },
  { time: '6H_AGO',  action: 'OPENED PR: VOID_OS PERFORMANCE PATCH',  branch: 'perf/wasm-opt',       color: '#C97CFF' },
  { time: '1D_AGO',  action: 'MERGED: QUANTUM_SYNC V2.1.0',            branch: 'main',                color: '#8FF5FF' },
  { time: '2D_AGO',  action: 'CREATED REPO: BINARY_FORGE_CLI',         branch: 'init',                color: '#E9FFBA' },
  { time: '3D_AGO',  action: 'RESOLVED 4 ISSUES IN VOID_OS',           branch: 'fix/terminal-render', color: '#AFEE00' },
]

const StreakPage = () => {
  const flat = contributions.flat()
  const totalContributions = flat.reduce((s, d) => s + d.count, 0)

  let currentStreak = 0
  for (let i = flat.length - 1; i >= 0; i--) {
    if (flat[i].count > 0) currentStreak++
    else break
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Border color='#8FF5FF' type='background'>ACTIVITY_LOG</Border>
        <T variant='h1' size='v6' font='sans' weight='black'>CODE_STREAK</T>
        <T font='mono' size='m3' color='secondary' weight='regular'>
          EVERY COMMIT. EVERY SESSION. EVERY LINE.
        </T>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <T font='mono' size='v5' weight='black' color='primary'>{String(totalContributions)}</T>
          <T font='mono' size='m1' color='secondary'>TOTAL_COMMITS</T>
        </div>
        <div className={styles.statCard}>
          <T font='mono' size='v5' weight='black' color='aqua'>{String(currentStreak)}</T>
          <T font='mono' size='m1' color='secondary'>CURRENT_STREAK</T>
        </div>
        <div className={styles.statCard}>
          <T font='mono' size='v5' weight='black' color='violet'>52</T>
          <T font='mono' size='m1' color='secondary'>WEEKS_TRACKED</T>
        </div>
        <div className={styles.statCard}>
          <T font='mono' size='v5' weight='black' color='mint'>∞</T>
          <T font='mono' size='m1' color='secondary'>MOTIVATION</T>
        </div>
      </div>

      <div className={styles.heatmapSection}>
        <div className={styles.sectionTitle}>
          <T size='v3' weight='black'>CONTRIBUTION_MATRIX // LAST_52_WEEKS</T>
          <span className={styles.line}></span>
        </div>
        <div className={styles.calendar}>
          <div className={styles.heatmap}>
            {contributions.map((week, wi) => (
              <div key={wi} className={styles.week}>
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={styles.day}
                    style={{ backgroundColor: getColor(day.count) }}
                    title={`${day.date.toISOString().split('T')[0]}: ${day.count} commits`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className={styles.legend}>
            <T font='mono' size='m1' color='secondary'>LESS</T>
            {[0, 2, 5, 8, 10].map((v) => (
              <div key={v} className={styles.legendCell} style={{ backgroundColor: getColor(v) }} />
            ))}
            <T font='mono' size='m1' color='secondary'>MORE</T>
          </div>
        </div>
      </div>

      <div className={styles.logSection}>
        <div className={styles.sectionTitle}>
          <T size='v3' weight='black'>RECENT_ACTIVITY</T>
          <span className={styles.line}></span>
        </div>
        <div className={styles.logEntries}>
          {recentActivity.map((entry, i) => (
            <div key={i} className={styles.logEntry}>
              <T font='mono' size='m1' color='secondary'>{entry.time}</T>
              <span className={styles.logConnector} style={{ backgroundColor: entry.color }} />
              <T font='mono' size='v1' weight='bold'>{entry.action}</T>
              <Border color={entry.color} type='border'>{entry.branch}</Border>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StreakPage
