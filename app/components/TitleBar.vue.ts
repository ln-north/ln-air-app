import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import electron from 'electron';
import { CustomizationService } from 'services/customization';
import { Inject } from 'util/injector';
import { StreamingService } from 'services/streaming';
import Utils from 'services/utils';
import { $t } from 'services/i18n';

const NAirLogoMark = require('../../media/images/logos/n-air-logo-mark.svg');
const NAirLogoType = require('../../media/images/logos/n-air-logo-type.svg');
const LiveIcon = require('../../media/images/live-icon.svg');
const WindowMinimizeIcon = require('../../media/images/icons/window-minimize-icon.svg');
const WindowMaximizeIcon = require('../../media/images/icons/window-maximize-icon.svg');
const WindowCloseIcon = require('../../media/images/icons/window-close-icon.svg');

@Component({
  components: {
    LiveIcon,
    NAirLogoMark,
    NAirLogoType,
    WindowMinimizeIcon,
    WindowMaximizeIcon,
    WindowCloseIcon,
  }
})
export default class TitleBar extends Vue {
  @Inject() customizationService: CustomizationService;
  @Inject() streamingService: StreamingService;

  @Prop() title: string;

  minimize() {
    electron.remote.getCurrentWindow().minimize();
  }

  maximize() {
    const win = electron.remote.getCurrentWindow();

    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }

  close() {
    if (Utils.isMainWindow() && this.streamingService.isStreaming) {
      if (!confirm($t('streaming.endStreamInStreamingConfirm'))) return;
    }

    electron.remote.getCurrentWindow().close();
  }

  get isStreaming() {
    return this.streamingService.isStreaming;
  }

}
