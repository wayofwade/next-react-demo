import useTitle from '../useTitle/index'
import useUpdate from '../useUpdate/index'
import useLocalStorage from '../useLocalStorage/index'


const defaultSettings = {
    notifications: 'weekly',
  };

const selfHooks = (title: string) => {
    // useTitle的例子
    useTitle('hello')
    const update = useUpdate()
    const [appSettings, seeAppSettings] = useLocalStorage(
        'app-settings',
        defaultSettings as any
      );
   
    return <div>hello-world
         <div>
         <div>useUpdate的例子</div>
         {Date.now()}
         <button onClick={update}>update</button></div>
         <div>
      <div>
      <div>useLocalStorage的例子</div>
        <p>Your application's settings: {appSettings.notifications} </p>

        <select
          value={appSettings.notifications}
          onChange={e =>
            seeAppSettings((settings: any) => ({
              ...settings,
              notifications: e.target.value,
            }))
          }
        >
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
        </select>
      </div>

      <button
        onClick={() => seeAppSettings(defaultSettings)}
      >
        Reset settings
      </button>
    </div>
    </div>
  }

export default selfHooks